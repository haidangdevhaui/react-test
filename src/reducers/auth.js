import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AUTH_LOGIN, AUTH_LOGOUT } from "../configs/actionTypes"

const persistConfig = {
    key: 'cart',
    storage,
}

const authReducer = (state = persistConfig, { type, payload }) => {
    switch (type) {

        case AUTH_LOGIN:
            return { ...state, ...payload }
        case AUTH_LOGOUT:
            return persistConfig
        default:
            return state
    }
}

export default persistReducer(persistConfig, authReducer)