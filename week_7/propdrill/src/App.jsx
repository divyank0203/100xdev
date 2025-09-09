import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count coutn={count}/>
      <Buttons less={function(){setCount(count-1)}} more={function(){setCount(count+1)}}></Buttons>
    
    </>
  )
}

export default App

function Count({coutn}){
//const [count, setCount] = useState(0)

  return (
    <>
      <h1>{coutn}</h1>
      
      </>
  )

}

function Buttons({more, less}){

return(
  <>
    <button onClick={more}>Increase</button><br /><br />
    <button onClick={less}>Decrease</button><br />
  </>
)

}
