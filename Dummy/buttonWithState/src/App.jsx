import { useState } from 'react'
import './App.css'

function App() {

  const [dinVal, setDinVal] = useState('Yes')

  function updateClick(){
    setDinVal(followingVal => (followingVal === "Yes" ? "Yes sir" : "Yes"))
  }

  return (
    <div className='container'>
      <h1>Is state understood?</h1>
      <button onClick={updateClick}>{dinVal}</button>
        
    </div>
  )
}

export default App
