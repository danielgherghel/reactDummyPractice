import './main.css';
import { useState } from 'react';

export default function Main() {
	const [ingredient, setIngredient] = useState([]);

	const displayIngredient = ingredient.map(
		(item, index) => <li key={index}>{item}</li>
	);

	function addIngredient(e) {
		e.preventDefault();
		const newFormData = new FormData(e.target);
		const getFormEl = newFormData.get('ingredient');
		setIngredient((prev) => [...prev, getFormEl]);
	}

	return (
		<>
			<div className="mainContainer">
				<form className="formBody" onSubmit={addIngredient}>
					<input
						type="text"
						placeholder="e.g. oregano"
						name="ingredient"
					></input>
					<button>Add ingredient</button>
				</form>
				<ul>{displayIngredient}</ul>
			</div>
		</>
	);
}
