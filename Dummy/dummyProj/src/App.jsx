import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [newCount, setNewCount] = useState(0)
  const [addArray, setAddArray] = useState([])
  const [boleeanBtn, setBoleeanBtn] = useState(true)
  const [dynGen, setDynGen] = useState({
    firstBox: 'first box to type in',
    secondBox: 'second box to type in',
    imageLink: 'https://i.imgflip.com/26am.jpg'
  })
  const [allImages, setAllImages] = useState([])
  const [formElements, setFormElements] = useState([])

  const arraySet = ['TSLA', 'AAPL, AMZN', 'NVIDIA', 'MARA, XRP', 'BTC, ETH', 'AMP','ANVIL']

  function updatePlus(){
    setNewCount(prev => prev + 1)
  }

  function updateMinus(){
    setNewCount(prev => prev - 1)
  }

  const arrayEl = addArray.map((item, index) => <ul key={index}>{item}</ul>)

  function updateArray(){
    setAddArray(prev => [...prev, arraySet[prev.length]])
  }

  function updateBoleeanBtn(){
    setBoleeanBtn(prev => !prev)
  }

  function updateInputs(e){
    const {name, value} = e.currentTarget
    setDynGen(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
        .then(data => setAllImages(data.data.memes))
        
  
  },[])

  function updateImage(){
    const randomNo = Math.floor(Math.random() * allImages.length)
    const getUrl = allImages[randomNo].url
    setDynGen(prev => ({
      ...prev,
      imageLink: getUrl
    }))
  }

  const formElementsShow = formElements.map((item, index) => <ul key={index}>{item}</ul>)

  function updateForm(event){
    event.preventDefault()
    const formEl = new FormData(event.target)
    const getFormElements = formEl.get('formInput')
    setFormElements(prev => [...prev, getFormElements])
  }

  return (
    <>

    <p>The count is {newCount}</p>
    <button onClick={updatePlus}>+</button>
    <button onClick={updateMinus}>-</button>
    
    <br />
    <br />
      <button onClick={updateArray}>Add items</button>
      <h3>{arrayEl}</h3>

      <br />
      <br />

      <div>
        <h2>Is what youre doing important?</h2>
        <button onClick={updateBoleeanBtn}>{boleeanBtn ? 'yes' : 'no'}</button>
      </div>

      <br />
      <br />
    <div className="genText">
      <label htmlFor='firstBox'>Type in box one</label>
      <input
        id='firstBox'
        type='text'
        name='firstBox'
        placeholder='type in...'
        value={dynGen.firstBox}
        onChange={updateInputs}
        ></input>
        <label htmlFor='secondBox'>Type in box two</label>
        <input
          id='secondBox'
          type='text'
          placeholder='type in...'
          name='secondBox'
          value={dynGen.secondBox}
          onChange={updateInputs}
        ></input>
        <br />
        <br />
        <p>First box value: {dynGen.firstBox}</p>
        <p>Secon box value: {dynGen.secondBox}</p>
        <button onClick={updateImage}>Change img</button>
        <div className='imageBox'>
          <img src={dynGen.imageLink}></img>
        </div>
    </div>

    <br />
    <br />
    <div>
      <section className='formSection'>
        <form onSubmit={updateForm}>
          <label htmlFor="formInput">Add items:</label>
          <input 
            type='text'
            placeholder='add item...'
            id='formInput'
            name='formInput'
          ></input>
          <button>Add now</button>
        </form>
      </section>

    <div>
      {formElementsShow}
    </div>
    </div>

    <div className='sound-wave'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    </>
  )
}

export default App
