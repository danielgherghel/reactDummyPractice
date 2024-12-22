
import './App.css'

function App() {
  


  function updateClick(){
    console.log('click');
  }

  function handleMouseOver(){
    console.log('mouse moved over');
  }

  return (
    <main className='container'>
      <img
        src='https://picsum.photos/640/360'
        alt='Placeholder image'
        onMouseOver={handleMouseOver}
      > 
      </img>
      <button onClick={updateClick}>Click me</button>



    </main>
  )
}

export default App
