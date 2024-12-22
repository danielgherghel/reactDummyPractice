import { useState } from 'react'

import './App.css'

function App() {

  const [textGen, setTextGen] = useState({
    firstText: "input first val",
    secondText: "input second val",
  })

  function updateInputs(e){
    const {name, value} = e.currentTarget
    setTextGen(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <div className='container'>

      <label>Top Text
        <input 
        type="text"
        placeholder='input first val'
        name="firstText"
        onChange={updateInputs}
        value={textGen.firstText}
        ></input>
      </label>

      <label>Bottom Text
        <input
        type="text"
        placeholder='input second val'
        name="secondText"
        onChange={updateInputs}
        value={textGen.secondText}


        ></input>
      </label>
      <button>Generate another post</button>
      
     
    </div>
  )
}

export default App
