import './main.css';
import { useState } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';

export default function Main() {
	const [ingredient, setIngredient] = useState([]);
	const [recipeShown, setRecipeShown] = useState(false);

	const displayIngredient = ingredient.map(
		(item, index) => <li key={index}>{item}</li>
	);

	function addIngredient(e) {
		e.preventDefault();
		const newFormData = new FormData(e.target);
		const getFormEl = newFormData.get('ingredient');
		setIngredient((prev) => [...prev, getFormEl]);
	}

	function toggleRecipeShown() {
		setRecipeShown((prev) => !prev);
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

				{ingredient.length > 0 && (
					<section className="recipeBody">
						<h2>Ingredients on hand:</h2>
						<ul className="ingredients-list">
							{displayIngredient}
						</ul>
						{ingredient.length > 3 && (
							<div className="get-recipe-container">
								<div className="recipeList">
									<h3>Ready for a recipe?</h3>
									<p>
										Generate a recipe from yout list of
										ingredients.
									</p>
									<button onClick={toggleRecipeShown}>
										Get a recipe
									</button>
								</div>
							</div>
						)}
					</section>
				)}
				{recipeShown && <ClaudeRecipe />}
			</div>
		</>
	);
}
