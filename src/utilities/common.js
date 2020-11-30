import { getStore } from '../configureStore'

// check user logged in
export const isLogin = () => {
    const { auth } = getStore().getState()
    return !(!auth.token)
}

/**
 * bind params to string
 * @param {string} str 
 * @param {object} params 
 */
export const bindParams = (str, params = {}) => {
    let result = str
    for (let key in params) {
        result = result.replace(new RegExp(`:${key}`, "g"), params[key])
    }
    return result
}