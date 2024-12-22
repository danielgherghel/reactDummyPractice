import { useState, useRef } from 'react'
import ContainerSize from './components/ContainerSize'

function App() {
  
  const [showEl, setShowEl] = useState(true)

  function toggleEl(){
    setShowEl(prev => !prev)
  }

  return (
    <>
      <div>
      <button onClick={toggleEl}>
        Toggle Container Size
      </button>
      { showEl && <ContainerSize /> }
      </div>
      
    </>
  )
}

export default App
