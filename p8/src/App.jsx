
import './App.css'

import Jokes from './components/Jokes'
import jokesData from './jokesData'

function App() {

  const jokeElements = jokesData.map(joke =>
    <div key={joke.setup} ><Jokes setup={joke.setup} joke={joke.punchline}/></div>
  )

  return (
    <>
    {jokeElements}
    </>


  )
}

export default App
