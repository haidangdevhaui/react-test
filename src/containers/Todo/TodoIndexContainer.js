import React from "react"
import { connect } from "react-redux"
import TodoIndexComponent from "../../components/Todo/TodoIndexComponent"

const TodoIndexContainer = () => {
    return <TodoIndexComponent />
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoIndexContainer)