import { useState } from 'react'
import './App.css'

function App() {
  const [myFavoriteThings, setMyFavoriteThings] = useState([])
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
    setMyFavoriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]])
    
  }

  return (
    <>
      <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
    </>
  )
}

export default App
