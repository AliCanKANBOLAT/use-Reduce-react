import { createContext, useContext, useReducer, useState } from "react";
import { countReducer, initialCountState } from "../reducer/counter";
const SiteContext = createContext();
function SiteContextProvider({children}) {
    const [count, dispatch] = useReducer(countReducer, initialCountState)
    const context = { counter: { state: count, dispatch } }
// const [Title,setTitle] = useState("deneme")
return(
    <SiteContext.Provider value={context}>
        {children}
    </SiteContext.Provider>
)
}
export { SiteContextProvider, SiteContext }