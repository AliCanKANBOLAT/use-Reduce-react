//App.js
import { useState, useReducer, useContext } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, initialCountState } from './reducer/counter'
import About from './About'
import { SiteContext } from './Context/SiteContext'
import ContextAboutPage from './ContextAboutPage'
import AddToDo from './AdToDo'


function App() {
 const {counter : {state, dispatch}} = useContext(SiteContext)
 console.log(state)


  return (
    <>
    <AddToDo />
    <hr />
     <h2>Count::: {state}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Artir</button>
     <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
     <button onClick={() => dispatch(RESET)}>Sifirla</button>
     <hr />
      <ContextAboutPage />
      <hr />
     <About />
    </>
  )
}

export default App
