import { useState } from 'react'
import './App.css'

function App() {
  
  const [ textGen, setTextGen ] = useState({
    firstBox: "type in the first text",
    secondBox: "type in the second text",
    thirdBox: "type in the third text",
    forthBox: "type in the fourth text",
  })
  

  function updateBoxes(e){
    const {name, value} = e.currentTarget
    setTextGen(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <>
      <label>First text box
        <input
          type="text"
          placeholder='type in the first text'
          name="firstBox"
          value={textGen.firstBox}
          onChange={updateBoxes}
        ></input>
      </label>
      <br></br>
      <label>Second text box
          <input
            type="text"
            placeholder='type in the second text'
            name='secondBox'
            value={textGen.secondBox}
            onChange={updateBoxes}
            ></input>
      </label>
      <br></br>
      <label>Third box
        <input 
          type='text'
          placeholder='type in the third text'
          name='thirdBox'
          value={textGen.thirdBox}
          onChange={updateBoxes}
          ></input>
      </label>
      <br></br>
      <br></br>
      <label>Fourth box
        <input 
          type='text'
          placeholder='type in the fourth text'
          name='forthBox'
          value={textGen.forthBox}
          onChange={updateBoxes}
          ></input>
      </label>


      <br></br>
      <button>Add another post</button>
      <br></br>
      {textGen.firstBox}
      <br></br>
      {textGen.secondBox}
      <br></br>
      {textGen.thirdBox}
      <br></br>
      {textGen.forthBox}
    </>
  )
}

export default App
