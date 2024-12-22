import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [buttonDisplay, setButtonDisplay] = useState(false)
  const [dinamicElements, setDinamicElements] = useState([])
  const [generateText, setGenerateText] = useState({
    firstVal: "type in the first val",
    secondVal: "type in the second val",
    imageAddress: "https://i.imgflip.com/1bij.jpg"
  })
  const [allImages, setAllImages] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllImages(data.data.memes))
  })

  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash", "Bivi", "CVDI"]

  const showDinamicEl = dinamicElements.map(items => <p key={items}>{items}</p>)

  function updateDinamicEl(){
    setDinamicElements(previousValues => [...previousValues, pairElements[previousValues.length]])
  }


  function updateButtonDisplay(){
    setButtonDisplay(prev => !prev)
  }

    function updateInputs(event){
      const {name, value} = event.currentTarget
      setGenerateText(prevItems => ({
        ...prevItems,
        [name]: value
      }))
    }

    function generateImage(){
      const randomNumber = Math.floor(Math.random() * allImages.length)
      const getNewUrl = allImages[randomNumber].url
      setGenerateText(prevItem => ({
        ...prevItem,
        imageAddress: getNewUrl
      }))
    }

  return (
    <>
      <div className='buttonDisplay'>
        <h1>Is learing continious?</h1>
        <button onClick={updateButtonDisplay}>{buttonDisplay ? "yes" : 'no'}</button>
      </div>

      <br />
      <br />
      <div>
        <button onClick={updateDinamicEl}>Add more</button>
        <p>{showDinamicEl}</p>
      </div>

      <br />
      <br />

      <div>
        <label>Type in the first value
          <input
            type='text'
            placeholder='type in'
            name='firstVal'
            value={generateText.firstVal}
            onChange={updateInputs}
          ></input>
        </label>
        <br />
        <br />
          <label>Type in the second value
            <input 
              type='text'
              placeholder='type in again'
              name='secondVal'
              value={generateText.secondVal}
              onChange={updateInputs}
            ></input>
          </label>
          <br />
          <br />

          <div>
            {generateText.firstVal}
            <br />
            <br />
            {generateText.secondVal}
          </div>
          <br />
          <br />

          <div>
            <button onClick={generateImage}>generate another image</button>
            <br />
            <br />
          </div>

          <div className="imageC">
            <img src={generateText.imageAddress}></img>
          </div>
      </div>
    </>
  )
}

export default App
