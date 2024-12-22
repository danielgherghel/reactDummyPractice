import { useState } from 'react'


function App() {

  const [textGen, setTextGen] = useState({
    firstVal: "top text value",
    secondVal: "bottom text value",
    thirdVal: "third text value",
  })

  function updateInputs(e){
    const {name, value} = e.currentTarget
    setTextGen(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }
 
  return (
    <>
      <label>First text value
        <input
          type="text"
          placeholder='First text value'
          value={textGen.firstVal}
          name="firstVal"
          onChange={updateInputs}
        ></input>
      </label>
      <br></br>
    <label>Second text value
      <input
        type='text'
        placeholder='Second text value'
        value={textGen.secondVal}
        name="secondVal"
        onChange={updateInputs}
      ></input>
    </label>
    <br></br>
    <label>Third text value
      <input 
      type="text"
      placeholder='third text value'
      value={textGen.thirdVal}
      name="thirdVal"
      onChange={updateInputs}
      ></input>
    </label>


    <p>{textGen.firstVal}</p>
    <p>{textGen.secondVal}</p>
    <p>{textGen.thirdVal}</p>
    </>
  )
}

export default App
