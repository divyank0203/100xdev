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
  

  return (
    <>
     
    </>
  )
}

export default App
