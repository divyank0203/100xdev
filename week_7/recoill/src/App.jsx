import { useState, useContext } from 'react'
import { useRecoilState, RecoilRoot, useRecoilValue } from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import countAtom  from './store/atoms/count'
import { useAtom } from 'jotai'


function App() {


  return (
    <>
      
        <Count/>
      
      
      
      
    
    </>
  )
}

export default App

function Count(){
//const [count, setCount] = useState(0)

  return (
    <>
      <CountRender/><br /><br />
      <Buttons></Buttons>
      
      </>
  )

}

function CountRender(){
  const [count, setCount] = useAtom(countAtom);
  return (
    <>
    {count}
    </>
  )
}

function Buttons(){
  const [count, setCount] = useAtom(countAtom);

return(
  <>
    <button onClick={function(){
      setCount(count+1)
    }}>Increase</button><br /><br />
    <button onClick={function(){setCount(count-1)}}>Decrease</button><br />
  </>
)

}
