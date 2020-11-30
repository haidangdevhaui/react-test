import React from "react"
import PropTypes from 'prop-types'
import { Col, Row, Form, Input, Button, Alert } from "antd"
import { formLayout, tailLayout } from "../../../configs/const"

const LoginContent = ({ onSubmit, errorMessage }) => {

    return <Row>
        {errorMessage ? <Col offset={4} span={16}>
            <Alert message={errorMessage} type="error" className="login-alert" />
        </Col> : null}
        <Col span={24}>
            <Form
                {...formLayout}
                name="basic"
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>
}

LoginContent.defaultProps = {
    onSubmit: () => { },
    errorMessage: null
}

LoginContent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}

export default LoginContent
