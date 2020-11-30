import React from "react"
import { connect } from "react-redux"
import TodoCreateOrUpdateComponent from "../../components/Todo/TodoCreateOrUpdateComponent"

const TodoCreateOrUpdateContainer = () => {
    return <TodoCreateOrUpdateComponent />
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreateOrUpdateContainer)