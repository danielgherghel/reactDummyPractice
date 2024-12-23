import './App.css'
import { useState } from 'react'
import avatar from './images/user.jpg'
import starFilled from './images/filled-star.jpg'
import starEmpty from './images/star.png'



function App() {

  
  const [toggleBtn, setToggleBtn] = useState(false)

  const [ contact, setContact] = useState({
    firstName: 'Jon',
    lastName: 'Doe',
    phone: '+1 (205) 444-1212',
    email: "email.email.com",
    isFavorite: false
  })


  function toggleFavorite(){
    setContact((item) => ({
      ...item,
      isFavorite: !item.isFavorite
    }))
  }


  return (
    <main>
      <article className='card'>
        <img
          src={avatar}
          className='avatar'
          alt='whatever name'
        ></img>
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={false}
            className='favorite-button'
          >
            <img
              src={contact.isFavorite ? starFilled : starEmpty}
              alt='star empty'
              className='favorite'
            ></img>
          </button>
          <h2 className='name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone} </p>
          <p className="contact">{contact.email}</p>
        </div>
      
      </article>

    </main>
  )
}

export default App
