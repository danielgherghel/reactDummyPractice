import './App.css'

function App() {
  
  function signUp(formData) {
    const email = formData.get("email")
    console.log(email)
  }

  const year = (new Date()).getFullYear()

  return (  
    <>
    <section className="formSection">
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name="email"
            id="email"
            placeholder="email@joe.com"
          />
          <label htmlFor="password">Password:</label>
            <input  
              type="password"
              name='password'
              id="password"/>
        <button>Submit</button>
        <button>{year}</button>
      </form>
    </section>

 
      
    </>
  )
}

export default App
