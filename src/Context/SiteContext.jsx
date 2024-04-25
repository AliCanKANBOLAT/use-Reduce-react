import { createContext, useContext, useReducer, useState } from "react";
import { countReducer, initialCountState } from "../reducer/counter";
import { initial, todoReducer } from "../reducer/Todo";
const SiteContext = createContext();
function SiteContextProvider({children}) {
    const [count, counterDispatch] = useReducer(countReducer, initialCountState)
    const [todos, toDoDispatch] = useReducer(todoReducer, initial)

    const context = { 
        counter: { state: count, dispatch : counterDispatch},
        todos: { state: count, dispatch : counterDispatch}
     }
// const [Title,setTitle] = useState("deneme")
return(
    <SiteContext.Provider value={context}>
        {children}
    </SiteContext.Provider>
)
}
export { SiteContextProvider, SiteContext }