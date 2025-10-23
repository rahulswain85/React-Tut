import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  const addValue = () => {
    

    if (counter >= 20) {
      setCounter(20);
    } else {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }

    
  }

  const subValue = () => {
    if (counter <= 0) {
      setCounter(0)
    }
    else {
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
    }
    
  }

  return (
    <>
      <h1>Chai Counter</h1>
      <h3>{counter} 🍵</h3>
      <button onClick={addValue}>Add</button>
      <button onClick={subValue}>Remove</button>
    </>
  )
}

export default App
