
import './App.css'
import Contact from './components/Contact'
import cat1 from './assets/cat.jpg'
import cat2 from './assets/cat2.jpg'
import cat3 from './assets/cat3.jpg'

function App() {


  return (
    <>
    <Contact img={cat1} name="Sppedy" phone="(425) 555-1456" email="pisi@home.com"/>
    <Contact img={cat2} name="Marica" phone="(425) 555-1466" email="pisicuta@home.com"/>
    <Contact img={cat3} name="Katty" phone="(423) 565-1455" email="cat@gmail.com"/>
    </>
  )
}

export default App
