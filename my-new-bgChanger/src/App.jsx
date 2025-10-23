import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("")

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setBgColor("red")}
              className="bg-red-500 rounded-2xl p-2 w-20"
            >
              Red
            </button>
            <button
              onClick={() => setBgColor("blue")}
              className="bg-blue-500 rounded-2xl p-2 w-20"
            >
              Blue
            </button>
            <button
              onClick={() => setBgColor("green")}
              className="bg-green-500 rounded-2xl p-2 w-20"
            >
              Green
            </button>
            <button
              onClick={() => setBgColor("purple")}
              className="bg-purple-500 rounded-2xl p-2 w-20"
            >
              Purple
            </button>
            <button
              onClick={() => setBgColor("orange")}
              className="bg-orange-500 rounded-2xl p-2 w-20"
            >
              Orange
            </button>
            <button
              onClick={() => setBgColor("black")}
              className="bg-black text-white rounded-2xl p-2 w-20"
            >
              Black
            </button>

            <button
              onClick={() => setBgColor("olive")}
              className="bg-lime-800 text-white rounded-2xl p-2 w-20"
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
