import Card from "./components/Card"
import data from './data.js'

function App() {


  const compEl = data.map((thing) => (
    <div key={thing.id}>
        <Card {...thing} />
    </div>
  ))

  return (
    <>
      
    {compEl}
    </>
  )
}

export default App
