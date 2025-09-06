import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.
  const [inputText, setInputText] = useState('');

  const showAlert = useCallback(function() {
    alert(inputText);
  }, [inputText]);


  return (
    <>
    <input type="text" placeholder='Enter the message' onChange={function(e){
      setInputText(e.target.value);
    }} /> <br /><br />
    <button onClick={showAlert}>Click Here</button>

    </>
  )
}

export default App
