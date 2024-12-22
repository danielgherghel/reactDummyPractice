import { useState } from 'react'
import './App.css'

function App() {

  const [showElements, setShowElements] = useState([])

  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash", "Bivi", "CVDI"]

  const showEl = showElements.map(item => <p key={item}>{item}</p>)

  function handleClick(){
    setShowElements(previousItems => [...previousItems, pairElements[previousItems.length]])
  }

  return (
    <>
      <button onClick={handleClick}>Add more</button>
      <p>{showEl}</p>
    </>
  )
}

export default App
