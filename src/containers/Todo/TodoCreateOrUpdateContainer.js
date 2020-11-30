import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import TodoCreateOrUpdateComponent from "../../components/Todo/TodoCreateOrUpdateComponent"
import { create, update } from '../../actions/todo'
import { TODO } from "../../configs/routePath"

const TodoCreateOrUpdateContainer = ({ list, create, update }) => {
    const { id } = useParams()
    const [todo, setTodo] = useState({})
    const history = useHistory()

    useEffect(() => {
        const todoItem = list.find((item) => {
            return item.id === parseInt(id)
        })
        setTodo(todoItem)
    }, [list, id])

    const onSubmit = ({ text }) => {
        if (id) {
            update(id, text)
        } else {
            create(text)
        }
        history.push(TODO)
    }

    return <TodoCreateOrUpdateComponent onSubmit={onSubmit} todo={todo} />
}

const mapStateToProps = (state) => {
    return {
        list: state.todo.list
    }
}

const mapDispatchToProps = {
    create,
    update
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreateOrUpdateContainer)