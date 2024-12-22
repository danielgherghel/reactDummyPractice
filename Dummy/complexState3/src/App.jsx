import { useState } from 'react'
import './App.css'

function App() {
  
  const [dinamicElements, setDynamicElements] = useState([])

  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash", "Bivi", "CVDI"]


  const elementsList = dinamicElements.map(item => (
    <p key={item}>{item}</p>
  ))


  function handleClick(){
    setDynamicElements(prevItem => [...prevItem, pairElements[prevItem.length]])
  }

  return (
    <>
      <button onClick={handleClick}>Add items</button>
      <p>{elementsList}</p>
    </>
  )
}

export default App
