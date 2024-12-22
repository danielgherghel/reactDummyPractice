import { useState } from 'react'
import './App.css'

function App() {

  const [elementsD, setElementsD] = useState([])
  
  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash", "Bivi", "CVDI", "NIO, ALGO"]

  const displayEl = elementsD.map(item => <p key={item}>{item}</p>)

  function handleClick(){
    setElementsD(lastValues => [...lastValues, pairElements[lastValues.length]])
  }

  return (
    <>
      <button onClick={handleClick}>Add item</button>
      <p>{displayEl}</p>
    </>
  )
}

export default App
