//About.jsx

import { useReducer } from "react"
import { DECREMENT, INCREMENT, RESET, countReducer } from "./reducer"
import { initialCountState } from "./reducer/count"
import ContextAboutPage from "./ContextAboutPage"


export default function About () {
const[count, dispatch] = useReducer(countReducer, initialCountState)
return(
<div>
<h2>About: Context APİ kullanilmadi...</h2>
<h2> {count} </h2>

<button onClick={() => dispatch(INCREMENT)}>Artir</button>
<button onClick={() => dispatch(DECREMENT)}>Azalt</button>
<button onClick={() => dispatch(RESET)}>Resetle</button>
<button onClick={() => dispatch("HEBELEHEBELE")}>Olmayani Yap...</button>
</div>
)
}