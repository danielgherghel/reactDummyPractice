import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [getElements, setGenElements] = useState({
    firstVal: "type in the first text",
    secondVal: "type in the second text",
    imageAddress: "https://i.imgflip.com/1bij.jpg"
  })

  const [allImages, setAllImages] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllImages(data.data.memes))

  },[])

  function updateMeme(){
    const genRandomNo = Math.floor(Math.random() * allImages.length)
    const getImageUrl = allImages[genRandomNo].url
    setGenElements(previousValues => ({
      ...previousValues,
      imageAddress: getImageUrl
    }))
  }

  function updateElements(e){
    const {name, value} = e.currentTarget
    setGenElements(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <>

    <label>First Val
      <input 
        type="text"
        placeholder='type in the text'
        value={getElements.firstVal}
        name="firstVal"
        onChange={updateElements}
        ></input>
    </label>
    <br />
    <label>Second Val 
      <input
        type="text"
        placeholder='type in the second text'
        value={getElements.secondVal}
        name='secondVal'
        onChange={updateElements}
      ></input>
    </label>

<br />
<br />
      <button onClick={updateMeme}>Change the meme</button>
      <br />
      <br />
      
      <div>
        {getElements.firstVal}
        <br />
        {getElements.secondVal}
        <br />
        <br />
      </div>
      <div>
        <img src={getElements.imageAddress} alt="" />
      </div>
    </>
  )
}

export default App
