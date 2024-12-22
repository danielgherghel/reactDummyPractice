import { useState, useEffect } from 'react'

function App() {
  
  const [genInputs, setGenInputs] = useState({
    topBox: "type in the first value",
    bottomBox: "type in the last value",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])
  
  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  },[])

  function updateImage(){
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const randomUrl = allMemes[randomNumber].url
    setGenInputs(previousItem => ({
      ...previousItem,
      imageUrl: randomUrl
    }))

  }

  function updateInputs(e){
    const {name, value} = e.currentTarget
    setGenInputs(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <>
        <label>Top box
          <input
            type="text"
            name="topBox"
            placeholder='insert the first value'
            value={genInputs.topBox}
            onChange={updateInputs}
          ></input>
        </label>

        <br />
        <label>Botom box
          <input
            type="text"
            name='bottomBox'
            placeholder='insert the bottom value'
            value={genInputs.bottomBox}
            onChange={updateInputs}
          ></input>
        </label>



      <div>
        {genInputs.topBox}
        <br />
        {genInputs.bottomBox}
      </div>

      <div>
        <button onClick={updateImage}>Generate a new image</button>
      </div>

      <div>
        <img src={genInputs.imageUrl} />
      </div>
      
    </>
  )
}

export default App
