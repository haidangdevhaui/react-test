import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { TODO_CREATE, TODO_DELETE, TODO_UPDATE } from "../configs/actionTypes"

const persistConfig = {
    key: 'todo',
    storage,
    list: [],
}

const todoReducer = (state = persistConfig, { type, payload }) => {
    switch (type) {
        case TODO_CREATE:
            return {
                ...state,
                list: [
                    ...state.list,
                    ...[payload]
                ]
            }

        case TODO_UPDATE:
            return {
                ...state,
                list: [...state.list].map((item) => {
                    if (item.id === parseInt(payload.id)) {
                        item.text = payload.text
                    }
                    return item
                })
            }

        case TODO_DELETE:
            return {
                ...state,
                list: [...state.list].filter((item) => {
                    return item.id !== parseInt(payload.id)
                })
            }

        default:
            return state
    }
}

export default persistReducer(persistConfig, todoReducer)