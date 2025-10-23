import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumber] = useState(false)
  const [chAllowed, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed){
      str += "0123456789";
    }

    if(chAllowed){
      str += "!@#$%^&*()_-+[]{}`~";
    }


    for(let i = 1; i<=length; i++){

      let ch = Math.floor(Math.random() * str.length )+ 1;

      pass += str.charAt(ch);

    }

    setPassword(pass)
  }, [length, numAllowed, chAllowed, setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, chAllowed, setPassword])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-500'>
        <h3 className='text-center text-white my-5 '>Password Generator</h3>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='bg-blue-50 w-full outline-none py-1 px-3' placeholder='Password' readOnly
          ref={passwordRef}/>
          <button onClick={copyPasswordToClip}
          className='bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6}
        max={15}
        value={length}
         className='cursor-pointer'
         onChange={e => setLength(e.target.value)}/>
         <label>Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={numAllowed}
        id="numberInput"
         className='cursor-pointer'
         onChange={() => setNumber(prev => !prev)}/>
         <label>Number</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={chAllowed}
        id="charInput"
         className='cursor-pointer'
         onChange={() => setCharacter(prev => !prev)}/>
         <label>Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
