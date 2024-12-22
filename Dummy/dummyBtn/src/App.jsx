import { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react'

function App() {

  const [mode, setMode] = useState(
    'awake'
  )
  const [genValues, setGenValues] = useState({
    firstVal: "first text val",
    secondVal: "second text val",
    imageUrl: "https://i.imgflip.com/1bij.jpg"
  })

  const [allImages, setAllImages] = useState([])

  function updateOnChange(event){
    const {name, value} = event.currentTarget
    setGenValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
        .then(data => setAllImages(data.data.memes))

  },[])

  function updateImage(){
    const generateRandomNo = Math.floor(Math.random() * allImages.length)
    const newImageUrl = allImages[generateRandomNo].url
    setGenValues(prevVals => ({
      ...prevVals,
      imageUrl: newImageUrl
    }))
  }
 
  function handleClick(){
    setMode(prevMode => (prevMode === 'awake' ? 'sleepy' : 'awake'))
  }

  return (
    <div className='container'>
      <h1>How are you now?</h1>
      <button className='modeBtn' onClick={handleClick}>{mode}</button>

      <div className='inputContainer'>
        <label>Type in the first value
          <input
            type='text'
            placeholder='type in the first value'
            name='firstVal'
            value={genValues.firstVal}
            onChange={updateOnChange}
          ></input>
        </label>

        <label>Type in the second value
          <input
            type='text'
            placeholder='type in the second value'
            name='secondVal'
            value={genValues.secondVal}
            onChange={updateOnChange}
          ></input>
        </label>

      </div>

      <div className='dinValsCont'>
        <p>{genValues.firstVal}</p>
        <p>{genValues.secondVal}</p>
        <img src={genValues.imageUrl}></img>
      </div>
      <div className='memeButton'>
        <button onClick={updateImage}>Generate another image</button>
      </div>
      
    </div>
  )
}

export default App
