import { DECREMENT, INCREMENT } from "../counter";
import { ADD_TODO, REMOVE_TODO, RESET } from "./ActionType";

export const initial = {
    todos: [],
    todo:''
}

export const todoReducer = (state, action) => {
    switch (action) {
        case INCREMENT:
            console.log(ADD_TODO,state)
            return state
        case DECREMENT:
        console.log(REMOVE_TODO,state)
            return state
        case RESET :
        console.log(RESET)
            return initial;
        default :
        return state
    }
}