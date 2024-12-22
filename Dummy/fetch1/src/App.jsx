import { useState, useEffect } from 'react'

function App() {

  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)
 
  // console.log("Rendered!");

  // 1. get the data

  // 2. Display the data or save the data in the state

  useEffect(() =>{
      console.log('The useEffect function was ran');
      fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
  },[count])


  //https://swapi.dev/api/people/1


  return (
    <>

    <h2>The count is {count}</h2>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next </button>
    <pre>{JSON.stringify({starWarsData}, null,2)}</pre>

    </>
  )
}

export default App
