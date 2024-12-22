import { useState } from 'react'
import './App.css'

function App() {
  
  const [elementsList, setElementsList] = useState([])

  const pairElements = ["Tesla, Nvdidia", "Amd", "QQQ, SPY, VOO", "BTC, ETH", "Shitcoins, Altcoins", "AMP", "Anvil, Zcash", "Bivi", "CVDI"]


  const elDisplay = elementsList.map(item => <p key={item}>{item}</p>)

  function updateList(){
    setElementsList(prevVal => [...prevVal, pairElements[prevVal.length]])
  }

  return (
    <>
    <button onClick={updateList}>Add items</button>
     <p>{elDisplay}</p>
    </>
  )
}

export default App
