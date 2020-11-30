import { TODO_CREATE, TODO_DELETE, TODO_UPDATE } from "../configs/actionTypes"

/**
 * create a todo action
 * @param {string} text 
 */
export const create = (text) => dispatch => {
    dispatch({ type: TODO_CREATE, payload: { text, id: Date.now() } })
}

/**
 * update a todo action by index
 * @param {number} index 
 * @param {string} text 
 */
export const update = (id, text) => dispatch => {
    dispatch({ type: TODO_UPDATE, payload: { id, text } })
}

/**
 * remove a todo action by index
 * @param {number} index 
 */
export const remove = (id) => dispatch => {
    dispatch({ type: TODO_DELETE, payload: { id } })
}