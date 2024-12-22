import { useState } from 'react'


function App() {
  
const [counter, setCounter] = useState(0)


  function add(){
    setCounter(prevVal => prevVal + 1)
  }

  function substract(){
    setCounter(prevVal => prevVal - 1)
  }

  return (
    <>
    <p>The count is {counter}</p>
    <button onClick={add}>+</button>
    <button onClick={substract}>-</button>
     
    </>
  )
}

export default App
