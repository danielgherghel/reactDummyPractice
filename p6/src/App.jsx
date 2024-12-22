import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data'
import './App.css'

const dataEl = data.map((item) => (
  <div key={item.id}>
    <Card {...item}/>
  </div>
))


function App() {

  return (
    <div>
      <NavBar />
      <Hero />

      <section className="cards-list">
       {dataEl}
      </section>
    </div>
  )
}

export default App
