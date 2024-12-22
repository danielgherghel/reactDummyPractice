import { useState } from 'react'
import './App.css'

function App() {
 
  const [updateState, setUpdateState] = useState(false)

  function handleClick(){
    setUpdateState(prev => !prev)
  }

  return (
    <div className='container'>
      <h1>Is state important?</h1>
      <button 
        onClick={handleClick}
        aria-label={`Current answer is ${updateState ? 'yes' : 'no'}. Click to change it`}
        >{updateState ? 'yes' : 'no'}</button>
    </div>
  )
}

export default App
