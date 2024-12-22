import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"

function App() {

return (
    <div className="wrapper">
      <Header />
        <div className="mainContent">
          <Body />
        </div>
      <Footer />
    </div>
  )
}

export default App
