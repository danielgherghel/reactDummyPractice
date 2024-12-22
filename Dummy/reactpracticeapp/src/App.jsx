import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [btnToggle, setBtnToggle] = useState(true)
  const [portArr, setPortArr] = useState([])
  const [inputElements, setInputElements] = useState({
    firstItem: "Type in the first value",
    secondItem: "Type in the second value",
    imgLink: 'https://i.imgflip.com/1bij.jpg'
  })
  const [allMemes, setAllMemes] = useState([])
  const [formInput, setFormInput] = useState([])


  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])

  const stockPortofolio = [
    "TSLA", "AAPL, AMZN", 'BIVI, CDLI, MU', 'BTC', 'ETH', 'AMP ANVL', 'RVPH'
  ]

  const displayPortofolio = portArr.map(item => <p key={item}>{item}</p>)
  
  function handlePortofolioBtn(){
    setPortArr(prev => [
      ...prev,
      stockPortofolio[prev.length]
    ])
  }

  function handleToggle(){
    setBtnToggle(prev => !prev)
  }

  function generateMeme(e){
    const {name, value} = e.currentTarget
    setInputElements(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function generateNewImage(){
    const randomNo = Math.floor(Math.random() * allMemes.length)
    const getUrl = allMemes[randomNo].url
    setInputElements(prev => ({
      ...prev,
      imgLink: getUrl
    }))
  }

  const formDataDisplay = formInput.map(item => <ul key={item}>{item}</ul>)

  function handleFormSubmit(e){
    e.preventDefault()
    const getFormData = new FormData(e.currentTarget)
    const showFormData = getFormData.get('inputTypeBox')
    setFormInput(prev => [...prev, showFormData])
  }

  return (
    <>
      <div className='btnToggle'>
        <h1>Is repeating necessarily?</h1>
        <button onClick={handleToggle}>{btnToggle ? 'yes': 'no'}</button>
      </div>

      <div className="portofolioArray">
        <p>{displayPortofolio}</p>
        <button onClick={handlePortofolioBtn}>Add more</button>
      </div>

      <div className="displayInputs">
        <label>Type in the value
          <input
            className='inputType'
            type='text'
            placeholder='type in'
            name='firstItem'
            value={inputElements.firstItem}
            onChange={generateMeme}
          ></input>
        </label>
        <label>Type in the second value
          <input
            className='inputType'
            type='text'
            placeholder='type in'
            name='secondItem'
            value={inputElements.secondItem}
            onChange={generateMeme}
          ></input>
        </label>

        <div className='imageContainer'>
          {inputElements.firstItem}
          <br />
          <br />
          {inputElements.secondItem}
          <br />
          <br />
          <button onClick={generateNewImage}>Generate</button>
          <br />
          <br />
          <img src={inputElements.imgLink} alt="" />
        </div>

        <div>
          <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder='input items'
            name='inputTypeBox'
            />
            <button>Add your own</button>
          </form>
          <ul>{formDataDisplay}</ul>
        </div>

      </div>
    </>
  )
}

export default App
