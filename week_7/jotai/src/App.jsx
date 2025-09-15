import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAtom } from 'jotai';
import { networkAtom, jobAtom, messageAtom, notificationAtom } from './Atoms'

function App() {
  // const [count, setCount] = useState(0)
  const [network, setNetwork] = useAtom(networkAtom);
  const [job, setJob] = useAtom(jobAtom);
  const [message, setMessage] = useAtom(messageAtom);
  const [notification, setNotification] = useAtom(notificationAtom);

  return (
    <>
      <button style={{margin: "10px"}}>Home</button>
      <button style={{margin: "10px"}}>Networks ({network>=100?"99+":network})</button>
      <button style={{margin: "10px"}}>Jobs ({job>=100?"99+":job})</button>
      <button style={{margin: "10px"}}>Messages ({message>=100?"99+":message})</button>
      <button style={{margin: "10px"}}>Notifications ({notification>=100?"99+":notification})</button>

      <button style={{margin: "10px"}} onClick={function(){
        setNetwork(network+1);
        setJob(job+1);
        setMessage(message+1);
        setNotification(notification+1);
      }}>My Profile</button>
    </>
  )
}

export default App
