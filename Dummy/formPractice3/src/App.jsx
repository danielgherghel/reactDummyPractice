import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState([])

  const displayFormData = formData.map((item, index) => <p key={index}>{item}</p>)

  function handleSubmit(e){
    e.preventDefault()
    const newFormData = new FormData(e.currentTarget)
    const getNewFormData = newFormData.get('inputForm')
    setFormData(prev => [...prev, getNewFormData])
  }

  return (
    <>
    <form className='formContainer' onSubmit={handleSubmit}>
      <label>Type in here</label>
      <input
        type='text'
        placeholder='type in...'
        name='inputForm'
      ></input>
      <button>Add more</button>
    </form>
    <div>{displayFormData}</div>
      
    </>
  )
}

export default App
