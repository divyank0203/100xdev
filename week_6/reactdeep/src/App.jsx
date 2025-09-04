import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let varid = 4;
function App() {


    
          const [todos, setTodo] = useState([{
        id: 1,
        title: "first todo",
        description: "this is the first todo ever"
    },{
        id: 2,
        title: "second todo",
        description: "second todo to ever exist"
    },{
        id: 3,
        title: "third todo",
        description: "last todo everrrrr"
    }])

    

    function addtodo(){
      const newtodo = [];
      todos.map(function(todo){
        newtodo.push(todo);
      })
      newtodo.push(
                {
          id: varid++,
          title: Math.random(),
          description: Math.random()
        }
      )
      setTodo(newtodo);
    }

    return(
      <div>
        <button onClick={addtodo}>Add todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} key={todo.id}></Todo>
        
      })}
      <Wrapper innercomp={<Cardcomp></Cardcomp>}></Wrapper>
      </div>
    )


}


function Todo(props) {

  return (
    <>
        <h1>
            {props.title}
        </h1>
        <h3>
            {props.description}
        </h3>
    </>
  )
}


function Wrapper(props){
  return(
  <>
    <div>{props.innercomp}</div>
  </>
  )
}

function Cardcomp(){
  return (
  <>
  <div style={{border: "2px solid black", padding: "10px", margin: "10px"}}>
    <h1>Here is the title</h1>
    
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>  
      </ul>
    
  </div>
  </>
  )
}


export default App
