import { useState, useEffect } from 'react'
import useSWR from 'swr' // this is a data fetching library
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const fetcher = url => fetch(url).then(res => res.json()); // fetcher function for useSWR

// custom hook to fetch todos every n seconds
function useTodos(n){

  // Using SWR for data fetching
  // const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher);

  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
  // const todos1 = data.todos;
  // return {todos1};

  // Using useEffect and setInterval for periodic fetching
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
      setLoading(false); // data is fetched every n seconds 
    })
    }, n*1000)

  }, [n]);
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
