import { useState } from 'react'


function App() {

  const [newText, setNewText] = useState({
    firstValue: "first text to display",
    secondValue: "second text to display",
  })

  function updateInputs(event){
    const {name, value} = event.currentTarget
    setNewText(currentValue => ({
      ...currentValue,
      [name]: value
    }))
  }
  

  return (
    <>
      <label>First text
        <input
        type="text"
        placeholder='first text to display'
        name="firstValue"
        value={newText.firstValue}
        onChange={updateInputs}
        ></input>
      </label>

      <label>Second text
        <input
        type='text'
        placeholder='second text to display'
        name='secondValue'
        value={newText.secondValue}
        onChange={updateInputs}
        ></input>
      </label>
      <button>generate a new post</button>

      <div>
        {newText.firstValue}
        <br></br>
        {newText.secondValue}
      </div>
    </>
  )
}

export default App
