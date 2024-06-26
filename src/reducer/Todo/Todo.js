import { ADD_TODO, REMOVE_TODO, RESET } from "./ActionType";
import { v4 as uuidv4 } from "uuid";

export const initial = {
    todos: [],
    todo:''
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(ADD_TODO,state)
            return {...state, todos:[...state.todos, {id : uuidv4() , title: action.payload}]}
        case REMOVE_TODO:
        const filteredTodos = state.todos.filter(item => item.id !== action.payload)
            return {...state, todos: filteredTodos}
        case RESET :
        console.log(RESET)
            return initial;
        default :
        return state
    }
}