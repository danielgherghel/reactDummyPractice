import { useState } from 'react'
import './App.css'

function App() {
  
  const [newText, setNewText] = useState({
    firstT: "first text value",
    secondT: "second text value"
  })

  function updateIn(e){
    const {name, value} = e.currentTarget
    setNewText(lastValues => ({
      ...lastValues,
      [name]: value
    }))
  }

  return (
    <>
      <label>first text
        <input
        type="text"
        placeholder='first text value'
        name="firstT"
        value={newText.firstT}
        onChange={updateIn}
        ></input>
      </label>

      <label>second text
        <input
        type="text"
        placeholder='second text value'
        name="secondT"
        value={newText.secondT}
        onChange={updateIn}
        >
        </input>
      </label>

      <button>Generate a new post</button>

      <div>
        {newText.firstT}
        <br></br>
        {newText.secondT}
      </div>
    </>
  )
}

export default App
