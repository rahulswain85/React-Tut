import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = ()=>{
    if(counter == 20){
      setCounter(counter = 20);
    }
    else{
      setCounter(counter+1);
    }
  } 

  const removeValue = ()=>{

    if(counter == 0){
      setCounter(counter = 0);
    }
    else{
      setCounter(counter-1);
    }
    
  } 
  
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button><br></br>
      <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
