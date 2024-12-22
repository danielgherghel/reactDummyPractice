import { useState } from 'react'
import './App.css'

function App() {
  const [toggleButton, setToggleButton] = useState(true)
  const [getFormData, setGetFormData] = useState([])

  function updateToggle(){
    setToggleButton(prev => !prev)
  }

  function updateSubmit(event){
    event.preventDefault()
    const getData = new FormData(event.currentTarget)
    const pullFormData = getData.get('textInput')
    setGetFormData(prev => [...prev, pullFormData])
  }
  
  const displayFormData = getFormData.map((item, index) => <p key={index}>{item}</p>)

  return (
    <>
      <div className="buttonToggle">
        <h1>Did you drink your water today?</h1>
        <button onClick={updateToggle}>{toggleButton ? 'yes' : 'no'}</button>
      </div>

      <div className='formContainer'>
        <form onSubmit={updateSubmit}>
          <label>Current list:</label>
          <input
            type='text'
            name='textInput'
            placeholder='type in...'
          ></input>
          <button>Add more</button>
        </form>
        <div>
          {displayFormData}
        </div>
      </div>
    </>
  )
}

export default App
