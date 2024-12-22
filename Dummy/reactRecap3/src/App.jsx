import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [buttonDisplay, setButtonDisplay] = useState(false)
  const [dynamicArray, setDinamycArray] = useState([])
  const [textGen, setTextGen] = useState({
    firstValue: "type in the first value",
    secondValue: "type in the second value",
    imageUrl: 'https://i.imgflip.com/1bij.jpg'
  })
  const [allImages, setAllImage] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllImage(data.data.memes))
  }, [])

  const stocksData = ['TSLA', 'AAPL, AMZN', 'NVIDIA', 'AMD BOVO', 'CSCO, FOX', 'BIVI, CLDI', 'IRNA']

  const displayStocks = dynamicArray.map(item => <p key={item}>{item}</p>)
  
  function handleDisplayBtn(){
    setButtonDisplay(prev => !prev)
  }
  
  function addMoreValues(){
    setDinamycArray(prev => [...prev, stocksData[prev.length]])
  }

  function updateInputs(e){
    const {name, value} = e.currentTarget
    setTextGen(prevVal => ({
      ...prevVal,
      [name]: value
    }))
  }

  function updateImageGen(){
    const getRadomNo = Math.floor(Math.random() * allImages.length)
    const getUrl = allImages[getRadomNo].url
    setTextGen(item => ({
      ...item,
      imageUrl: getUrl
    }))
  }

  return (
    <div className='container'>
    <div className='buttonDisplay'>
      <h1>Is eating important?</h1>
      <button onClick={handleDisplayBtn}>{buttonDisplay ? 'no' : 'yes'}</button>
    </div>
    <br />
    <br />
    <div className='addMore'>
      <button onClick={addMoreValues}>Add more</button>
      <ul>{displayStocks}</ul>
      <br />
      <br />
      
    </div>

    <div className='dynamicInputs'>
      <label>Type in the value
        <input
          type='text'
          placeholder='type in the first value'
          name='firstValue'
          value={textGen.firstValue}
          onChange={updateInputs}
        ></input>
      </label>
      <br />
      <br />
      <label>Type in the second Val
        <input
          type='text'
          placeholder='type in the second value'
          name='secondValue'
          value={textGen.secondValue}
          onChange={updateInputs}
        ></input>
      </label>

      <div className='inputsResults'>
        <p>{textGen.firstValue}</p>
        <p>{textGen.secondValue}</p>
      </div>

      <button onClick={updateImageGen}>Generate another image</button>
      
      <div className="imageContainer">
        <img src={textGen.imageUrl} alt="" />
      </div>

     

    </div>
  

    </div>
  )
}

export default App
