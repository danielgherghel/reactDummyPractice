import { useState } from 'react'


function App() {
  

  const [getText, setGetText] = useState({
    firstVal: 'top text',
    secondVal: 'middle text',
    thirdVal: 'third text'
  })

  function updateValues(e){
    const {name, value} = e.currentTarget
    setGetText(previousValue => ({
      ...previousValue,
      [name]: value
    }))
  }

  return (
    <>

    <label>first box
      <input
        type='text'
        placeholder='type in the vaue'
        name="firstVal"
        value={getText.firstVal}
        onChange={updateValues}
      ></input>
    </label>
    <br />
    <label>first box
      <input
        type='text'
        placeholder='type in the vaue'
        name="secondVal"
        value={getText.secondVal}
        onChange={updateValues}
      ></input>
    </label>
<br />
    <label>first box
      <input
        type='text'
        placeholder='type in the vaue'
        name="thirdVal"
        value={getText.thirdVal}
        onChange={updateValues}
      ></input>
    </label>
    <br />

    {getText.firstVal}
    <br />
    {getText.secondVal}
    <br />
    {getText.thirdVal}
    </>
  )
}

export default App
