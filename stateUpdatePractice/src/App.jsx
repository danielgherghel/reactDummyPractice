import { useState } from 'react'


function App() {
 
  const [textGen, setTextGen] = useState({
    firstVal: "first text to display",
    secondVal: "second text to display"
  })

  function updateState(e){
    const { name, value} = e.currentTarget
    setTextGen(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <>


      <label>First text
        <input
        type="text"
        placeholder='first text to display'
        value={textGen.firstVal}
        name="firstVal"
        onChange={updateState}
        ></input>
      </label>

    <label>Second text
      <input 
      type="text"
      placeholder='second text to display'
      value={textGen.secondVal}
      name="secondVal"
      onChange={updateState}
      ></input>
    </label>

    <button>generate another post</button>
      
    </>
  )
}

export default App
