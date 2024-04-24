import { useContext, useReducer } from "react";
import { DECREMENT, INCREMENT } from "./reducer"
import { SiteContext } from "./Context/SiteContext";

export default function ContextAboutPage() {
    const {counter : {state, dispatch}} = useContext(SiteContext)
return <div>
    <h2>Context About Context API Kullanildi...</h2>
    <h2> {state} </h2>
    <button onClick={() => dispatch(INCREMENT)}>Artir</button>
    <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
    <button onClick={() => dispatch(RESET)}>Resetle</button>
    <button onClick={() => dispatch("HEBELEHEBELE")}>Olmayani Yap...</button>
</div>
}