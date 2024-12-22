import { useState } from "react"
import WindowTracker from "./components/WindowTracker"

function App() {

  const [show, setShow] = useState(true)

  function updateBtn(){
    setShow(prevVal => !prevVal)
  }

    console.log(show);
 
  return (
    <>
    
      <main className="container">
      
        <button onClick={updateBtn}>
          Toggle WindowTracker
        </button>
        { show && <WindowTracker />}
        
      </main>
    </>
  )
}

export default App
