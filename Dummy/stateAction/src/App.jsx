import { useState } from 'react'
import './App.css'

function App() {
  
  const [buttonState, setButtonState] = useState('yes')

  function handleClick(){
    setButtonState(previousState => (previousState === 'yes' ? 'yes sir' : 'yes'))
  }

  return (
    <div className='container'>
      <h1>Is state important</h1>
      <button onClick={handleClick}>{buttonState}</button>
    </div>
  )
}

export default App
