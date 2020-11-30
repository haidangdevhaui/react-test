import React from 'react'
import { Menu as DefaultMenu } from 'antd'
import { LOGIN, ROOT_PATH, TODO } from '../../configs/routePath'
import { Link, useHistory } from 'react-router-dom'
import { connect } from "react-redux"
import { logOut } from '../../actions/auth'

const Menu = ({ auth, logOut }) => {
    const history = useHistory()
    const onLogOut = () => {
        logOut()
        history.push(ROOT_PATH)
    }

    return <DefaultMenu mode="horizontal">
        <DefaultMenu.Item key="mail">
            <Link to={ROOT_PATH}>Home</Link>
        </DefaultMenu.Item>
        {!auth.token ? <DefaultMenu.Item key="login">
            <Link to={LOGIN}>Login</Link>
        </DefaultMenu.Item>
            :
            <>
                <DefaultMenu.Item key="todo">
                    <Link to={TODO}>Todo</Link>
                </DefaultMenu.Item>
                <DefaultMenu.Item key="logout" onClick={onLogOut}>
                    Logout
                </DefaultMenu.Item>
            </>}
    </DefaultMenu>
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)