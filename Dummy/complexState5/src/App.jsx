import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [elementsList, setElementsList] = useState([])
  const [buttonState, setButtonState] = useState('yes')
  const [contentGen, setContentGen] = useState({
    firstVal: "at work again",
    secondVal: "the week is almost done though",
    imageUrl: 'https://i.imgflip.com/1bij.jpg'
  })
  const [allImages, setAllImages] = useState([])
  
  useEffect(() => {
      fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllImages(data.data.memes))

  },[])

  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash", "Bivi", "CVDI"]

  const displayElements = elementsList.map(item => <p key={item}>{item}</p>)

  function updateClick(){
    setElementsList(previousValues => [...previousValues, pairElements[previousValues.length]])
  }
  
  function updateButtonState(){
    setButtonState(prevVal => (prevVal === 'yes' ? 'no' : 'yes'))
  }

  function updateFields(e){
    const {name, value} = e.currentTarget
    setContentGen(prevVal => ({
      ...prevVal,
      [name]: value
    }))
  }

  function updateImageMeme(){
    const randomNo = Math.floor(Math.random() * allImages.length)
    const newImageURL = allImages[randomNo].url
    setContentGen(prevValues => ({
      ...prevValues,
      imageUrl: newImageURL
    }))
  }

  return (
    <>
      <button onClick={updateClick}>Add item</button>
      <p>{displayElements}</p>

      <div className='buttonState'>
        <h1>Is learning important?</h1>
        <button onClick={updateButtonState}>{buttonState}</button>
      </div>
      <br />

      <div>
        <div>
          <label>Type in the first value
            <input
              type="text"
              name="firstVal"
              placeholder='type in the value'
              value={contentGen.firstVal}
              onChange={updateFields}
            ></input>
          </label>
        </div>

        <div>
          <label>Type in the second value
            <input
              type='text'
              name='secondVal'
              placeholder='type in the second val'
              value={contentGen.secondVal}
              onChange={updateFields}
            ></input>
          </label>
        </div>

        <br />
        <div>
          <button onClick={updateImageMeme}>generate another image</button>
        </div>
        <br />

        <div>
          <br />
          {contentGen.firstVal}
          <br />
          <br />
          {contentGen.secondVal}
          <br />
        </div>
        <br />

        <div>
          <img src={contentGen.imageUrl}></img>
        </div>

      </div>
    </>
  )
}

export default App
