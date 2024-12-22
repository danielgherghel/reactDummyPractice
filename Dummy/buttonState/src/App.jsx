import { useState } from 'react'
import './App.css'

function App() {

  const [initialState, setInitialState] = useState('yes')
 
  function handleClick(){
    setInitialState(prevState => (prevState === 'yes' ? "no" : 'yes'))
  }

  return (
    <div className='container'>
      <p>Is state important?</p>
      <button onClick={handleClick}>{initialState}</button>
    </div>
  )
}

export default App
