import { useState } from "react"
import WindowWidth from "./components/WindowWidth"

function App() {
  
  const [show, setShow] = useState(false)

  function updateBtn(){
    setShow(prevShow => !prevShow)
  }

  return (
    <>
    <button onClick={updateBtn}>Toggle window width</button>
     {show && <WindowWidth />}
    </>
  )
}

export default App
