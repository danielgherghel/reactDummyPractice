import { useEffect, useRef, useState } from 'react'
import './App.css'




function App() {


  const [ containerWidth, setContainerWidth] = useState(window.innerWidth)
  const [showEl, setShowEl] = useState(true)
  const [displayEl, setDisplayEl] = useState({
    firstVal: "first box",
    secondVal: "second box",
    imageUrl: "https://i.imgflip.com/1bij.jpg"
  })

  const [allImages, setAllImages] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllImages(data.data.memes))

  },[])

  function updateImage(){
    const generateRandomImage = Math.floor(Math.random() * allImages.length)
    const imageUrl = allImages[generateRandomImage].url
    setDisplayEl(previousElements => ({
      ...previousElements,
      imageUrl: imageUrl
    }))
  }


  useEffect(() => {
    function displayWidth(){
      setContainerWidth(window.innerWidth)
    }

    window.addEventListener('resize', displayWidth)

    return function(){
      window.removeEventListener('resize', displayWidth)
    }

  }, [])

  function buttonUpdate(){
    setShowEl(prevValue => !prevValue)
  }

  function updateValues(e){
    const {name, value} = e.currentTarget
    setDisplayEl(prevVal => ({
      ...prevVal,
      [name]: value
    }))
  }

  return (
    <>
    <div className="mainContainer">
      <button onClick={buttonUpdate}>Display the width</button>
      <button onClick={updateImage}>Generate another image</button>
      <div className='boxContainer'>
        {showEl && (
          <>
            <h1>{containerWidth}px</h1>
            <h2 className='topText'>{displayEl.firstVal}</h2>
            <h2 className='bottomText'>{displayEl.secondVal}</h2>
            <div className='imageWrapper'>
              <img src={displayEl.imageUrl}></img>
            </div>
            
          </>
        )}
      </div>
      <div className='inputSection'>
        <label>Type in the first value
          <input
            type='text'
            placeholder='first value'
            name="firstVal"
            value={displayEl.firstVal}
            onChange={updateValues}
          ></input>
        </label>
        <label>Type in the secon value
          <input 
          type="text"
          placeholder='second value'
          name='secondVal'
          value={displayEl.secondVal}
          onChange={updateValues}
          ></input>
        </label>
        </div>
    </div>
    </>
  )
}

export default App
