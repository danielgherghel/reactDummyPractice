import { useState } from 'react';
import '../index.css';


export default function Main(){

    const [ingredients, setIngredients] = useState([])

    const ingredEl = ingredients.map(item => (
        <li key={item}>{item}</li>
    ))
  

    function handleFormSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevItem => [...prevItem, newIngredient])
    
    }

 

    return(
        <>
            <div className="mainContainer">
                <form className='formBody' onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label='Add Ingredient'
                        name='ingredient'
                    ></input>
                    <button>Add ingredinent</button>
                </form>
                <ul>
                {ingredEl}
                </ul>
            </div>
        </>
    )
}