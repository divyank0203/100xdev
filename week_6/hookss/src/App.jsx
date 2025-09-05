import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodo] = useState([]);
// every 10 seconds fetch the data from the server and update the state todos
  useEffect(function(){
    setInterval(() => {
    fetch("https://sum-server.100xdevs.com/todos") //
    .then(async function(res){
      const data = await res.json();
      setTodo(data);
      console.log(data);
    })      
    }, 10000);

  }, [])

  
  return (
    <>
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description} key={todo.id}></Todo>
    })}

    </>
  )
}

export default App


// a component to render the todos after fetching from the server and updating the state
function Todo(props){

  return (
    <>
        <h1>
            {props.title}
        </h1>
        <h3>
            {props.description}
        </h3>
    </>
  )}