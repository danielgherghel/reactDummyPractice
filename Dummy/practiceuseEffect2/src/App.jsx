import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [generateText, setGenerateText] = useState({
    valueOne: "type in the value",
    valueTwo: "type in the value",
    imageValue: "https://i.imgflip.com/1bij.jpg"
  })

  const [allImages, setAllImages] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(data => setAllImages(data.data.memes))

  }, [])

  function getMoreImages(){
    const randomNo = Math.floor(Math.random() * allImages.length)
    const randomUrl = allImages[randomNo].url
    setGenerateText(prevValues => ({
      ...prevValues,
      imageValue: randomUrl
    }))
  }

  function updateTexts(event){
    const {name, value} = event.currentTarget
    setGenerateText(prevItem => ({
      ...prevItem,
      [name]: value
    }))
  }

  return (
    <>

    <label>Type in the value
      <input
        type='text'
        placeholder='type in'
        name='valueOne'
        value={generateText.valueOne}
        onChange={updateTexts}
      ></input>
    </label>
    <br />
    
    <label>Type in the second value
      <input
        type='text'
        placeholder='type in'
        name='valueTwo'
        value={generateText.valueTwo}
        onChange={updateTexts}
      ></input>
    </label>
    <br />
    <br />

    <button onClick={getMoreImages}>Generate another image</button>
    <br />
    <br />
    

    <div className='imageContainer'>
      <img src={generateText.imageValue} alt="" className='imageGen'/>

    <div className='textContainer'>
        <div className='topText'>
            {generateText.valueOne}
        </div>
        
        <div className='bottomText'>
          {generateText.valueTwo}
        </div>
      </div>
      <br />
      
    </div>


      
    </>
  )
}

export default App
