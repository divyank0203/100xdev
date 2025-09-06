import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputval, setinputval] = useState('0')
// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
const Factorial = useMemo(function(){
  let fact = 1;
  for(let i=1; i<=inputval; i++){
    fact *= i;
  }
  return fact;
}, [inputval])
  return (
    <>
     <input type="text" placeholder='Enter a number' onChange={function(e){
      setinputval(Number(e.target.value));
     }} />
     <h3>Factorial of {inputval} is {Factorial}</h3>
     {/* <Factorial n={inputval} /> */}
    </>
  )
}



export default App
