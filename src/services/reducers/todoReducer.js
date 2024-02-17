import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constants/TodosConstants"

const initialTodoState = {
    isLoading: false,
    todos: [],
    error: null
}
export const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODO_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case GET_TODO_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }
        default:
            return state
    }
}