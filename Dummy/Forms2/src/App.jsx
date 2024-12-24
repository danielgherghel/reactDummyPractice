
function App() {

  function search(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const query= formData.get('query')
    alert(`You searched for '${query}'`);
  }
  
  return (
    <>
      <form onSubmit={search}>
        <input name="query"></input>
        <button type="submit">Search</button>
      </form>

    </>
  )
}

export default App
