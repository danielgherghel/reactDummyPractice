import { useState } from 'react'
import './App.css'



function App() {

  const [textBox, setTexBox] = useState({
    firstVal: "Top text to display",
    secondVal: "Second text to display",
    imageGen: "https://i.imgflip.com/1bij.jpg"
  })

  function handleTextChange(e){
    const {name, value} = e.currentTarget
    setTexBox(prevVal => ({
      ...prevVal,
      [name]: value,
    }))
  }



  return (
    <div className='wPage'>
      <main className='container'>
        <label>
          Top Text
          <input
          type="text"
          placeholder='Top text to display'
          name="firstVal"
          onChange={handleTextChange}
          value={textBox.firstVal}
          ></input>
        </label>

        <label>
          Bottom Text
          <input
          type="text"
          placeholder='Second text to display'
          name="secondVal"
          onChange={handleTextChange}
          value={textBox.secondVal}
          ></input>
        </label>
        <button>Generate a new post</button>
        <div>
          <img src={textBox.imageGen}></img>
        </div>
      </main>
    </div>
  )
}

export default App
