import React from "react"
import { connect } from "react-redux"
import TodoIndexComponent from "../../components/Todo/TodoIndexComponent"
import { remove } from '../../actions/todo'

const TodoIndexContainer = ({ list, remove }) => {
    return <TodoIndexComponent todoList={list} onDelete={remove} />
}

const mapStateToProps = (state) => {
    return {
        list: state.todo.list
    }
}

const mapDispatchToProps = {
    remove
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoIndexContainer)