//count.js

import { useReducer, useState } from "react"
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"



export const initialCountState = 0
export const countReducer = (state, action) => {
    switch (action) {
        case INCREMENT :
            console.log(INCREMENT)
            return state+1
        case DECREMENT : 
        console.log(DECREMENT)
        return state-1
        case RESET :
            return initialCountState
            default :
            console.log("Default State...")
            return state
    }
}