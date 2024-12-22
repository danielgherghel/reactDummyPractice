import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [genText, setGenText] = useState({
    firstText: "type in the first value",
    secondText: "type in the second value",
    imageAdr: "https://i.imgflip.com/1bij.jpg"
  })

  const [allImages, setAllImages] = useState([])


  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllImages(data.data.memes))

  },[])

  function updateImages(){
    const randomNumber = Math.floor(Math.random() * allImages.length)
    const imageUrl = allImages[randomNumber].url
    setGenText(lastVals => ({
      ...lastVals,
      imageAdr: imageUrl
    }))
  }

  function updateInputs(e){
    const {name, value} = e.currentTarget
    setGenText(previousValue => ({
      ...previousValue,
      [name]: value
    }))
  }

  return (
    <>

    <div>
      <label>first text box
        <input
          type="text"
          placeholder='type in the value'
          name='firstText'
          value={genText.firstText}
          onChange={updateInputs}
        ></input>
      </label>
      <br />
      <br />
      <label>second text box
        <input
          type='text'
          placeholder='type in the value'
          name='secondText'
          value={genText.secondText}
          onChange={updateInputs}
        ></input>
      </label>
    </div>
     <br />


     <div>
      {genText.firstText}
      <br />
      <br />
      {genText.secondText}
      <br />
      <br />

      <div>
        <button onClick={updateImages}>
          update image
        </button>
        <br />
        <br />
      </div>
     </div>
     <div>
      <img src={genText.imageAdr} />
     </div>
    </>
  )
}

export default App
