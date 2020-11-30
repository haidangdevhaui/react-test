import { AUTH_KEY } from '../configs/const'

// check user logged in
export const isLogin = () => {
    return !(!localStorage.getItem(AUTH_KEY))
}