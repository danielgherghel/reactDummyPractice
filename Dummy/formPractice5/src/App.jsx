import { useState } from 'react'
import './App.css'

function App() {
  const [formInfo, getFormInfo] = useState([])

  const showFormData = formInfo.map((item, index) => <p key={index}>{item}</p>)

  function handleSubmit(e){
    e.preventDefault()
    const generateData = new FormData(e.currentTarget)
    const getNewData = generateData.get('inputElement')
    getFormInfo(prev => [...prev, getNewData])
  }

  return (
    <>
      <form className='formContainer' onSubmit={handleSubmit}>
        <label>Form List:</label>
        <input
          type='text'
          name='inputElement'
          placeholder='type in...'
        ></input>
        <button>Add more</button>
      </form>
      <div>
        {showFormData}
      </div>
    </>
  )
}

export default App
