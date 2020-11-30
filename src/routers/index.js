import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
    LOGIN,
    ROOT_PATH,
    TODO,
    TODO_CREATE,
    TODO_UPDATE
} from "../configs/routePath"
import HomeContainer from "../containers/HomeContainer"
import TodoIndexContainer from "../containers/Todo/TodoIndexContainer"
import TodoCreateOrUpdateContainer from "../containers/Todo/TodoCreateOrUpdateContainer"
import PrivateRoute from "./PrivateRoute"
import LoginContainer from '../containers/Auth/Login/LoginContainer'
const AppRouter = (
    <Switch>
        <Route path={ROOT_PATH} exact component={HomeContainer} />
        <Route path={LOGIN} exact component={LoginContainer} />
        <PrivateRoute path={TODO} exact component={TodoIndexContainer} />
        <PrivateRoute path={TODO_CREATE} exact component={TodoCreateOrUpdateContainer} />
        <PrivateRoute path={TODO_UPDATE} exact component={TodoCreateOrUpdateContainer} />
    </Switch>
)

export default AppRouter