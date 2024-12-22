import { useState } from 'react'

function App() {

  const [textValue, setTextValue] = useState({
    firstText: "input the first text",
    secondText: "input the second text"
  })

  function updateValues(event){
    const {name, value} = event.currentTarget
    setTextValue(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }


  return (
    <>
      <label>First Text Box
        <input 
        type="text"
        placeholder='input the first text'
        name="firstText"
        value={textValue.firstText}
        onChange={updateValues}
        ></input>
      </label>

      <label>Second Text Box
        <input
        type='text'
        placeholder='input the second text'
        name="secondText"
        value={textValue.secondText}
        onChange={updateValues}
        ></input>
      </label>
      <button>Generate another text</button>
    </>
  )
}

export default App
