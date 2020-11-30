import { combineReducers } from 'redux'
import todoReducer from './todo'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    todo: todoReducer,
})

export default rootReducer
