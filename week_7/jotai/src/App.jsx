import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAtom } from 'jotai';
import { networkAtom, jobAtom, messageAtom, notificationAtom } from './Atoms'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <button style={{margin: "10px"}}>Home</button>
      <button style={{margin: "10px"}}>Networks ()</button>
      <button style={{margin: "10px"}}>Jobs ()</button>
      <button style={{margin: "10px"}}>Messages ()</button>
      <button style={{margin: "10px"}}>Notifications ()</button>

      <button style={{margin: "10px"}}>My Profile</button>
    </>
  )
}

export default App
