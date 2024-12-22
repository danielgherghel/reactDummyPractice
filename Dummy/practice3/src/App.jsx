import { useState } from 'react'
import './App.css'

function App() {

  const [box1, setBox1] = useState({
    firstVal: "input first value",
    secondVal: "input the second value",
    thirdVal: "input the third value"
  })

  function updateText(event){
    const {name, value} = event.currentTarget
    setBox1(previosValue => ({
      ...previosValue,
      [name]: value
    }))
  }

  return (
    <>
     

     <label>top text box
        <input
          type='text'
          placeholder='input first value'
          name="firstVal"
          value={box1.firstVal}
          onChange={updateText}
        ></input>
     </label>
     <label>bottom text box
        <input
          type="text"
          placeholder='input the second value'
          name="secondVal"
          value={box1.secondVal}
          onChange={updateText}
        >
        </input>
     </label>

    <label>third text box
      <input
        type="text"
        placeholder='input the third value'
        name="thirdVal"
        value={box1.thirdVal}
        onChange={updateText}
      ></input>
    </label>

      <button>Create a new post</button>
      <div>
      {box1.firstVal}
      <br></br>
      {box1.secondVal}
      <br></br>
      {box1.thirdVal}
      </div>
    </>
  )
}

export default App
