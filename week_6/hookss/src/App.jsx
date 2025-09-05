import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [selectedId, setSelectedId] = useState(1);
// this state will help change the id prop passed to the Todo component
// when the id prop changes the useEffect in the Todo component will run again and fetch the data from the server again

  
  return (
    <>
    <button onClick={function(){setSelectedId(1)}}>1</button>
    <button onClick={function(){setSelectedId(2)}}>2</button>
    <button onClick={function(){setSelectedId(3)}}>3</button>
    <button onClick={function(){setSelectedId(4)}}>4</button>
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description} key={todo.id}></Todo>
    })}

    </>
  )
}

export default App


// a component to render the todos after fetching from the server and updating the state
function Todo(props){

    const [todos, setTodo] = useState([]);
// every 10 seconds fetch the data from the server and update the state todos
  useEffect(function(){
    
    fetch("https://sum-server.100xdevs.com/todos") //
    .then(async function(res){
      const data = await res.json();
      setTodo(data);
      console.log(data);
    })      
    

  }, [props.id]) // run this effect only when the id prop changes

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