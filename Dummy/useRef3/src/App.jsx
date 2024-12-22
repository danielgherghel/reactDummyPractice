import { useState } from "react"
import WindowWidth from "./components/WindowWidth"


function App() {

  const [textGen, setTextGen] = useState({
    firstVal: "input the first val",
    secondVal: "input the second val",
    thirdVal: "input the third value"
  })

  const [displayVal, setDisplayVal] = useState(true)

  function updateBtn(){
    setDisplayVal(prevVal => !prevVal)
  }

  function updateVals(e){
    const {value, name} = e.currentTarget
    setTextGen((prevVal => ({
      ...prevVal,
      [name]: value
    })))
  }

  return (
    <>
    <label>First box
      <input 
      type="text"
      name="firstVal"
      placeholder="first value"
      value={textGen.firstVal}
      onChange={updateVals}  
      ></input>
    </label>
    <br />

    <label>Second box
      <input 
      type="text"
      name="secondVal"
      placeholder="second value"
      value={textGen.secondVal}
      onChange={updateVals}  
      ></input>
    </label>
    <br />

    <label>Third Box
      <input 
      type="text"
      name="thirdVal"
      placeholder="third value"
      value={textGen.thirdVal}
      onChange={updateVals}  
      ></input>
    </label>
    <br />

    <br />
    {textGen.firstVal}
    <br />
    {textGen.secondVal}
    <br />
    {textGen.thirdVal}
    <br />

    {displayVal && <WindowWidth />}

    <button onClick={updateBtn}>Display window width</button>
      
    </>
  )
}

export default App
