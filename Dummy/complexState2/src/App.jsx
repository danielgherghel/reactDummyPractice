import { useState } from 'react'
import './App.css'

function App() {
  
  const [allElements, setAllElements] = useState([])

  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash"]

  const getAllElements = allElements.map(item => (
    <p key={item}>{item}</p>
  ))

  function handleElements(){
    setAllElements(previousValue => [...previousValue, pairElements[previousValue.length]])
  }

  return (
    <>
      <main>
        <button onClick={handleElements}>Add item</button>
        <p>{getAllElements}</p>
      </main>
    </>
  )
}

export default App
