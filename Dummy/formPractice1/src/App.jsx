import { useState } from 'react'
import './App.css'

function App() {

  const [itemsList, setItemsList] = useState([])

  const listElements = itemsList.map(item => (
    <ul key={item}>{item}</ul>
  ))


  function handleFormSubmit(e){
    e.preventDefault()
    const getDate = new FormData(e.currentTarget)
    const newItems = getDate.get('itemInput')
    setItemsList(prev => [...prev, newItems])
  }

  return (
    <>
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          placeholder='add item'
          name='itemInput'
        ></input>
        <button>Add item</button>
      </form>
      <ul>
        {listElements}
        
      </ul>
    </div>
      
    </>
  )
}

export default App
