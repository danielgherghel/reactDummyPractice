import jokesData from './jokesData'
import './App.css'
import Joke from './Joke'

function App() {

  const jokesEl = jokesData.map(item => {
    return(
      <Joke 
      key={item.id}
      setup={item.setup}
      punchline={item.punchline}
      />
    )
  })

  return (
    <>
      {jokesEl}
    </>
  )
}

export default App
