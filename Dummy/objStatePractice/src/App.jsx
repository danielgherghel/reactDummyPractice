import { useState } from 'react'
import './App.css'
import starFilled from './images/filled-star.jpg'
import star from './images/star.png'

function App() {
  const [toggleBtn, setToggleBtn] = useState(false)
  const [inputTexts, setInputTexts] = useState({
    firstVal: 'first value to show',
    secondVal: 'second value to show'
  })
  const [arrayList, setArrayList] = useState([])
  const [showFormData, setShowFormData] = useState([])
  const [showFav, setShowFav] = useState({
    isLiked: false
  })
  
  function updateClick(){
    setToggleBtn(prev => !prev)
  }

  function updateInputVals(e){
    const {name, value} = e.currentTarget
    setInputTexts(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const stockList = ['TSLA', 'AAPL, AMZN', 'BTC, USD', 'AMP', 'ANVL', 'AAPL, NVDA', 'AMD']

  function updateArrayList(){
    setArrayList(prev => [...prev, stockList[prev.length]])
  }

  const showArrayList = arrayList.map((item, index) => <p key={index}>{item}</p>)

  function handleSubmit(e){
    e.preventDefault()
    const newForm = new FormData(e.currentTarget)
    const getFormData = newForm.get('inputForm')
    setShowFormData(prev => [...prev, getFormData ])
  }

  const showListForm = showFormData.map((item, index) => <p key={index}>{item}</p>)

  function toggleStarButton(){
    setShowFav(prev => ({
      ...prev,
      isLiked: !prev.isLiked
    }))
  }

  return (
    <>
    <div className='toggleBtn'>
      <h1>Anything to do?</h1>
      <button onClick={updateClick}>{toggleBtn ? 'yes' : 'no'}</button>
    </div>

    <div className='inputSection'>
      <label>First item
        <input
          type='text'
          placeholder='type in..'
          name='firstVal'
          value={inputTexts.firstVal}
          onChange={updateInputVals}
        ></input>
      </label>

      <label>Second item
        <input
          type='text'
          placeholder='type in...'
          name='secondVal'
          value={inputTexts.secondVal}
          onChange={updateInputVals}
        ></input>
      </label>
    </div>

    <div className='inputTexts'>
        <p>{inputTexts.firstVal}</p>
        <p>{inputTexts.secondVal}</p>
    </div>

    <div>
      <button onClick={updateArrayList}>Add more</button>
      <h3>Ticker:</h3>
      <div>{showArrayList}</div>
    </div>

  <div className='formSection'>
    <form onSubmit={handleSubmit}>
      <label>Items</label>
      <input 
        type='text'
        placeholder='type in...'
        name='inputForm'
      ></input>
      <button>Add more</button>
    </form>
    <div>
      {showListForm}
    </div>

    <div className='favoriteSection'>
      <button onClick={toggleStarButton}>
      <img 
      src={showFav.isLiked ? starFilled : star}
      alt='star image'
      className='toggleStar'
      ></img>
      </button>
    </div>
    
  </div>

    </>
  )
}

export default App
