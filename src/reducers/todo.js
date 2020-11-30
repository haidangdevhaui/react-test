import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { TODO_UPDATE } from "../configs/actionTypes"

const persistConfig = {
    key: 'cart',
    storage,
}

const todoReducer = (state = persistConfig, { type, payload }) => {
    switch (type) {

        case TODO_UPDATE:
            return { ...state, ...payload }

        default:
            return state
    }
}

export default persistReducer(persistConfig, todoReducer)