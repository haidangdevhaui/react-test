import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

function configureStore(preloadedState) {
    // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
    )
}

const store = configureStore({})

export const getStore = () => store

export default store
