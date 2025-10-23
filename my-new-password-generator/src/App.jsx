import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str += "0123456789"
    }

    if (character) {
      str += "{}()-+/_$%#!@&*=|~"
    }

    for (let i = 1; i <= length; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length) +1)
    }

    setPassword(pass)

    console.log(pass)

  }, [length, number, character, setPassword])


  


  useEffect(()=>passwordGenerator(), [length, number, character, setPassword, passwordGenerator]);
  
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="flex flex-wrap justify-center bg-white dark:bg-gray-800 shadow-xl w-full h-screen">
        <div className="rounded-lg w-lg p-10 bg-blue-500 flex flex-wrap flex-col gap-3 justfy-center m-auto">
          <h1
            className="font-mono text-center text-4xl bg-white rounded-lg "
          >
            Password Generator
          </h1>
          <div className="flex flex-row">
            <input
              type="text"
              className="w-full h-10 bg-white shrink"
              readOnly
              placeholder="Password"
              value={password}
              ref={passwordRef}
            ></input>
            <button
              onClick={copyPasswordToClipboard}
              className="ml-4 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 hover:scale-105"
            >
              Copy
            </button>
          </div>

          <div className="bg-gray-500 rounded-lg flex flex-row">
            <label className="text-white" htmlFor="length">
              Length {length}
            </label>

            <input
              type="range"
              className="bg-white shrink-0 m-auto h-2"
              name="length"
              value={length}
              min={6}
              max={40}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>

            <label htmlFor="numbers" className="text-white">
              Numbers
            </label>
            <input
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              name="numbers"
              type="checkbox"
              className="p-10 h-3 m-auto bg-white"
            ></input>

            <label htmlFor="characters" className="text-white">
              Characters
            </label>

            <input
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
              name="characters"
              type="checkbox"
              className="p-10 m-auto bg-white"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
