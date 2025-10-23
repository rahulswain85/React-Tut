import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {username: "rahi", age: 5}

  return (
    <>
    <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">Tailwind Test</h1>
    
      <Card username="rahi"/>
      <Card username="prachi" desc="forever"/>
    </>
  )
}

export default App
