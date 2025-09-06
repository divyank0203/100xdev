import { useState, memo, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const[inputval, setinputval] = useState(0);

  //useEffect approach
  // const [finalval, setfinalval] = useState(0);

  // // calculate the sum from 1 to inputval
  // useEffect(function(){
  //     let sums=0;
  // for(let i=1; i<=inputval; i++){
  //   sums+=i;
  // }
  // setfinalval(sums);
  // }, [inputval]) // run this effect only when the inputval changes


  // usememo approach
  // let finalval = useMemo(function(){
  //   let sums=0;
  //   for(let i=1; i<=inputval; i++){
  //     sums+=i;
  //   }
  //   return sums;
  // }, [inputval]) // recalculate finalval only when inputval changes



  return (
    <>
    {/* <input type="text" id='in' onChange={function(e){
      setinputval(e.target.value);
    }}/><br />
    <p>The Sum from 1 to {inputval} is {finalval}</p><br /> */}
    <button onClick={function(){setCount(count+1)}}>Counter {count}</button>

    </>
  )
}

export default App


