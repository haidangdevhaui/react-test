import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routers from './routers'

require('./assets/scss/style.scss')

const App = ({ history }) => {
    return <ConnectedRouter history={history}>
        {routers}
    </ConnectedRouter>
}
export default App
