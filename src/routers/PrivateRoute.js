import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from '../utilities/common'
import { ROOT_PATH } from '../configs/routePath'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (!isLogin() ? <Redirect to={ROOT_PATH} /> : <Component {...props} />)}
        />
    )
}
export default PrivateRoute
