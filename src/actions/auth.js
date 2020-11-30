import { AUTH_LOGIN, AUTH_LOGOUT } from "../configs/actionTypes"
import { FAKE_AUTH } from "../configs/const"

/**
 * login action
 * @param {string} userName 
 * @param {string} _password 
 */
export const logIn = (userName, password) => dispatch => {
    if (userName === FAKE_AUTH.username && password === FAKE_AUTH.password) {
        dispatch({ type: AUTH_LOGIN, payload: { userName, token: 'fake token' } })
        // fake async success response
        return Promise.resolve({
            success: true
        })
    }
    // fake async error response
    return Promise.resolve({
        success: false,
        message: 'Username or Password is invalid!'
    })
}

/**
 * logout action
 */
export const logOut = () => dispatch => {
    dispatch({ type: AUTH_LOGOUT })
}