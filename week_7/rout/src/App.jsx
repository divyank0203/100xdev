import { useState, lazy } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

//arrow function only
const Landing = lazy(() => import("./components/Landing"))
const Dashboard = lazy(() => import("./components/Dashboard"))


import { Route, Routes, useNavigate } from 'react-router-dom'
//useNavigate hook
// this hook is used to navigate from one page to another
// without reloading the page again and again by using window.location method

/**
 * 
 * const navigate = useNavigate()
 * 
 */

function App() {
  const [count, setCount] = useState(0)

 



  return (
    <>
 
    
    <BrowserRouter>
      <Rot/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App


function Rot(){
   const navigate = useNavigate();

  return (
       <div style=
    {{border: "2px solid black", padding: "10px", margin: "10px"}}>
      This is the Top Bar
      <span style={{margin: "10px"}} ><button
      onClick={function(){
        navigate("/")
      }}>Landing</button></span>
      <button onClick={function(){navigate("/dashboard")}}>Dashboard</button></div>
  )
}
