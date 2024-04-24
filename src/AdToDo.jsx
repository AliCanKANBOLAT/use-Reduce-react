import { useReducer } from "react"
import { initial, todoReducer } from "./reducer/Todo/Todo"
import { ADD_TODO } from "./reducer/Todo"

export default function AddToDo () {

    const [state, dispatch] = useReducer(todoReducer, initial)

    function HandleSubmit (event) {
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    dispatch({type: ADD_TODO, payload: inputValue})
    event.target.reset()
}
    return(
        <>
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="todo bilgisini giriniz..."/>
                <button type="submit">Ekle</button>
        </form>
        <ul>
        {state?.todos.map((item, ) =><li key={item.id}>{item.id} {item.title}</li>)}
        </ul>
        </>
    )
}