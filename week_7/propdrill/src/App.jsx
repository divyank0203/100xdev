import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CountContext } from './context'
// wrap anyone that wants to use the teleported value inside a provider


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
      </CountContext.Provider>
      
    
    </>
  )
}

export default App

function Count({setCount} ){
//const [count, setCount] = useState(0)

  return (
    <>
      <CountRender/><br /><br />
      <Buttons setCount={setCount}></Buttons>
      
      </>
  )

}

function CountRender(){
  const count = useContext(CountContext);
  return (
    <>
    {count}
    </>
  )
}

function Buttons({setCount}){
  const count = useContext(CountContext);
return(
  <>
    <button onClick={function(){
      setCount(count+1)
    }}>Increase</button><br /><br />
    <button onClick={function(){setCount(count-1)}}>Decrease</button><br />
  </>
)

}
