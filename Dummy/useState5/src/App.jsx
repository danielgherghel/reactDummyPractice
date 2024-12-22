import { useState } from "react"

function App() {
 
  const [textGen, setTextGen] = useState({
    firstBox: "first text box",
    secondBox: "second text box",
    thirdBox: "third text box",
  })

  function updateText(e){
    const {name, value} = e.currentTarget
    setTextGen(prevVal => ({
      ...prevVal,
      [name]: value,
    }))
  }

  return (
    <>

    <label>First box
      <input 
      type="text"
      placeholder="type the top text"
      name="firstBox"
      value={textGen.firstBox}
      onChange={updateText}
      ></input>
    </label>
    <br />
    <label>Second Box
      <input 
      type="text"
      placeholder="type the middle text"
      name="secondBox"
      value={textGen.secondBox}
      onChange={updateText}
      ></input>
    </label>
    <br />
    <label>Third box
      <input 
      type="text"
      placeholder="type the top text"
      name="thirdBox"
      value={textGen.thirdBox}
      onChange={updateText}
      ></input>
    </label>
      
    <div>
    {textGen.firstBox}
    <br />
    {textGen.secondBox}
    <br />
    {textGen.thirdBox}
    </div>
      
    </>
  )
}

export default App
