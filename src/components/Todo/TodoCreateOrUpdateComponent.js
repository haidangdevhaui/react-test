import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Col, Row, Form, Input, Button } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { formLayout, tailLayout } from '../../configs/const'

const TodoCreateOrUpdateComponent = ({ todo, onSubmit }) => {
    const [form] = useForm()

    useEffect(() => {
        if (todo && todo.id) {
            form.setFieldsValue({ text: todo.text })
            return () => {
                form.setFieldsValue({ text: '' })
            }
        }
    }, [todo, form])

    return <Row>
        <Col span={24}>
            <Form
                {...formLayout}
                form={form}
                name="basic"
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Todo"
                    name="text"
                    rules={[{ required: true, message: 'Please input todo content!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        {todo && todo.id ? 'Update' : 'Create'}
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>
}

TodoCreateOrUpdateComponent.defaultProps = {
    onSubmit: () => { },
    todo: {}
}

TodoCreateOrUpdateComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    todo: PropTypes.object
}

export default TodoCreateOrUpdateComponent