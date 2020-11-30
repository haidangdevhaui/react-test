import { combineReducers } from 'redux'
import todoReducer from './todo'
import authReducer from './auth'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    todo: todoReducer,
    auth: authReducer,
})

export default rootReducer
