import { useState } from 'react'
import './App.css'

function App() {
  const [dynamicState, setDynamicState] = useState([])

  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash", "Bivi", "CVDI", "NIO, ALGO"]

  const displayEl = dynamicState.map(item => <p key={item}>{item}</p>)

  function updateClick(){
    setDynamicState(prevValue => [...prevValue, pairElements[prevValue.length]])
  }

  return (
    <>

    <div>
      <button onClick={updateClick}>Add Item</button>
      <p>{displayEl}</p>
    </div>
      
    </>
  )
}

export default App
