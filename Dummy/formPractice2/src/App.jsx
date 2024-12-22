import { useState } from 'react'
import './App.css'

function App() {
  const [formGen, setFormGen] = useState([])

  const displayForm = formGen.map(item => <p key={item}>{item}</p>)

  function handleSubmit(e){
    e.preventDefault()
    const getData = new FormData(e.currentTarget)
    const newDataForm = getData.get('inputEl')
    setFormGen(prev => [...prev, newDataForm])
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Type in the items</label>
      <input 
      type="text"
      name='inputEl'
      placeholder='type ins'
      />
      <button>Add</button>
    </form>

    <div>
      {displayForm}
    </div>
    </>
  )
}

export default App
