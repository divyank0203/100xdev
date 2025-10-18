import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function useTodos(n){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function(){

    setInterval(function(){
    fetch('https://sum-server.100xdevs.com/todos')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      setTodos(data.todos);
      setLoading(false);
    })
    }, n*1000)

  }, []);
  return {todos, loading};
}

function App() {
  const {todos, loading} = useTodos(5); // using the custom hook

  if(loading){
    return <h1>Loading...</h1>
  }

  // render the todos
  return (
    <>
      {/* <div>
        {todos.map(funtion(todo){
          <div>{todo}</div>
        })}
      </div> */}
    </>
  )
}

export default App
