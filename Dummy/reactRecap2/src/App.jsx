import { useState } from 'react'
import './App.css'

function App() {
  const [buttonState, setButtonState] = useState(false)
  const [dynamicButton, setDynamicButton] = useState([])
  

  const itemsArray = ['TSLA', 'AAPL, AMZN', 'CLDI, BIVI, ALDI', 'BTCUSD, ETHUSD', 'AMP, ANVL', 'XRP']

  const displayEl = dynamicButton.map(item => <p key={item}>{item}</p>)


  function updateBtnState(){
    setButtonState(prev => !prev)
  }

  function updateDynBtn(){
    setDynamicButton(prevItem => [...prevItem, itemsArray[prevItem.length]])
  }

  return (
    <>
    <div className='buttonState'>
      <h1>Is learning important?</h1>
      <button onClick={updateBtnState}>{buttonState ? 'no' : 'yes'}</button>
    </div>

    <br />
    <br />
    <div>
      <button onClick={updateDynBtn}>Add item</button>
      <p>{displayEl}</p>
    </div>
      
    </>
  )
}

export default App
