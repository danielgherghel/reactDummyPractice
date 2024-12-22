import { useState, useEffect } from 'react'

import './App.css'

function App() {
  
  const [show, setShow] = useState(true)
  const [imageUrl, setImageUrl] = useState("https://i.imgflip.com/1bij.jpg")
  const [allImages, setAllImages] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllImages(data.data.memes))

  },[])

  function updateImage(){
    const randomNo = Math.floor(Math.random() * allImages.length)
    const imageDataUrl = allImages[randomNo].url
    setImageUrl(imageDataUrl)
  }

  function updateShow(){
    setShow(whateverVal => !whateverVal)
  }

  return (
    <>

    <button onClick={updateShow}>Display button</button>
    <br></br>
      {show && <button onClick={updateImage}>Generate new image</button>}
      <br></br>
      <img src={imageUrl}></img>
    </> 
  )
}

export default App
