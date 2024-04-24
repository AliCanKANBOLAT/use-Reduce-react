import { useReducer } from "react"
import { initial, todoReducer } from "./reducer/Todo/Todo"

export default function AddToDo () {

    const [state, dispatch] = useReducer(todoReducer, initial)

    function HandleSubmit (event) {
    event.preventDefault()
    console.log(event.target.elements[0].value)
}
    return(
        <>
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="todo bilgisini giriniz..."/>
                <button type="submit">Ekle</button>
        </form>
        
        </>
    )
}