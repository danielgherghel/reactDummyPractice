import { useState } from 'react'
import './App.css'

function App() {
  
  const [state, setState] = useState('yes')

  function handleClick(){
    setState(prevVal => (prevVal === 'yes' ? 'no' : 'yes'))
  }

  return (
    <main>
      <h1 className='title'>Is state important to know?</h1>
      <button onClick={handleClick} className='value'>{state}</button>
    </main> 
  )
}

export default App
