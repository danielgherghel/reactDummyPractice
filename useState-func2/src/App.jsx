import { useState } from "react"

function App() {

  const [counter, setCounter] = useState(0)

  function addN(){
    setCounter(preValue => preValue + 1)
  }

  function subN(){
    setCounter(preValue => preValue - 1)
  }
  
  return (
  
    <>

    <p>The counter is {counter}</p>
     <button onClick={addN}>Add</button>
     <button onClick={subN}>Subs</button>


    </>
  )
}

export default App
