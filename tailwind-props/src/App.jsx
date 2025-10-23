import { useState } from 'react'
import prachu1 from "./assets/IMG_20250809_131910_409.jpg";
import prachu2 from "./assets/IMG_20250809_204203_150.jpg";
import prachu3 from "./assets/chatpati.jpg"
import './App.css'
import { Card } from '../components/cards.jsx'



function App() {
  const [username, setUsername] = useState('');

  return (
    <>
      <h2 className="text-3xl font-semibold text-pink-500 drop-shadow-md tracking-wide text-center bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent animate-pulse">
        My Sweetiest Babyyyy
      </h2>
      <Card
        imageURL={prachu1}
        name="Prachu Cutiee"
        description="Cutieesettt Ever 🥰💖"
      />
      <Card
        imageURL={prachu2}
        name="Prachu Pyaaruuu"
        description="Pyaariest Ever 🥰💖"
      />
      <Card
        imageURL={prachu3}
        name="Chatpati Prachu"
        description="Sexiestttt Ever 🙈🫦"
      />
    </>
  );
}

export default App
