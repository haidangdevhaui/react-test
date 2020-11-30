import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routers from './routers'
import MasterLayout from './layouts/MasterLayout'

import 'antd/dist/antd.css'
require('./assets/scss/style.scss')


const App = ({ history }) => {
    return <ConnectedRouter history={history}>
        <MasterLayout>
            {routers}
        </MasterLayout>
    </ConnectedRouter>
}
export default App
