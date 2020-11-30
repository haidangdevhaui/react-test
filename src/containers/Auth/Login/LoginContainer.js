import React, { useState } from "react"
import { connect } from "react-redux"
import LoginContent from "../../../components/Auth/Login/LoginContent"
import { logIn } from '../../../actions/auth'
import { useHistory } from "react-router-dom"
import { ROOT_PATH } from "../../../configs/routePath"

const LoginContainer = ({ logIn }) => {
    const history = useHistory()
    const [errorMessage, setErrorMessage] = useState(null)

    const onSubmit = ({ username, password }) => {
        logIn(username, password).then(({ success, message }) => {
            if (success) {
                history.push(ROOT_PATH)
            }
            if (message) {
                setErrorMessage(message)
            }
        })
    }

    return <LoginContent onSubmit={onSubmit} errorMessage={errorMessage} />
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)