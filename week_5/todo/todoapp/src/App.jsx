import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "todo 1",
      description: "this is todo 1",
      complete: false},
    {
      id: 2,
      title: "todo 2",
      description: "this is todo 2",
      complete: false}])

      function newtodo(){
        setTodo([...todo, {
          id: 3,
          title: `todo ${todo.length + 1}`,
          description: `this is todo ${todo.length + 1}`,
          complete: false}])
      }


   //Instead of returning these one by one we can use map
  return (
    <>
      {/* <Addtodo title = {todo[0].title} description = "this is todo 1"/>
      <Addtodo title = "todo 2" description = "this is todo 2"/>
      <Addtodo title = "todo 3" description = "this is todo 3"/> */}
    <button onClick={newtodo}>Add New Todo</button>

      {todo.map(function(todo){
        return(
          <>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </>
        )
      })}

     
    </>
  )
}

function Addtodo(props){
  return(
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  )
}

export default App
