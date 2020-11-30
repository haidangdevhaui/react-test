import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row, Table } from 'antd'
import { useHistory } from 'react-router-dom'
import { TODO_CREATE, TODO_UPDATE } from '../../configs/routePath'
import { bindParams } from '../../utilities/common'

const TodoIndexComponent = ({ todoList, onDelete }) => {
    const history = useHistory()

    const columns = [
        {
            title: 'Text',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Action',
            key: 'id',
            dataIndex: 'id',
            render: (id) => {
                return <>
                    <Button onClick={() => history.push(bindParams(TODO_UPDATE, { id }))}>Edit</Button>
                    <Button onClick={() => onDelete(id)}>Delete</Button>
                </>
            }
        },
    ];
    return <Row>
        <Col offset={4} span={16}>
            <Button type="primary" onClick={() => history.push(TODO_CREATE)}>Create</Button>
        </Col>
        <Col offset={4} span={16}>
            <Table dataSource={todoList} columns={columns} pagination={false} rowKey="id" />
        </Col>
    </Row>
}

TodoIndexComponent.defaultProps = {
    onDelete: () => { },
    todoList: []
}

TodoIndexComponent.propTypes = {
    onDelete: PropTypes.func.isRequired,
    todoList: PropTypes.array.isRequired
}

export default TodoIndexComponent