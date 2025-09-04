import React from 'react'
import { useState } from 'react'

function Todo() {
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
  return (
    <>
        <h1>
            {title}
        </h1>
        <h3>
            {description}
        </h3>
    </>
  )
}

export default Todo