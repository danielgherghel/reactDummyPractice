import { useState } from 'react'
import './App.css'

function App() {
 
    const [myBestThings, setMyBestThings] = useState([])

    const allFavoriteThings = [
      "AMD NVDA",
      "GOOGL",
      "MSFT IBM",
      "TSLA QCOM",
      "INTC CSCO",
      "AAPL",
      "AAPL AMZN",
      "ORCL CRM",
      "DELL HPQ",
      "IBM CRM"
    ];

      const elements = myBestThings.map(item => <p key={item}>{item}</p>)
      
      function handleClick(){
        setMyBestThings(prevItem => [...prevItem, allFavoriteThings[prevItem.length]])
      }
    

  return (
    <>

    <main>
      <button onClick={handleClick}>Add Item</button>
      <section>
        {elements}
      </section>
    </main>
      
    </>
  )
}

export default App
