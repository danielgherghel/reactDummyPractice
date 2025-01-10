import { useState } from 'react';
import './App.css';

function App() {
	function submitForm(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		const nutritionInfo = formData.getAll('nutritionVal');
		// console.log('Form Data: ', data);
		const allData = {
			...data,
			nutritionInfo,
		};
		console.log(allData);
	}

	return (
		<>
			<section className="sectionContainer">
				<h1>Sign up</h1>
				<form
					className="formContainer"
					onSubmit={submitForm}
				>
					<label>Email:</label>
					<input
						type="email"
						name="formEmail"
						id="email"
						placeholder="email@mail.com"
						defaultValue="joe@email.com"
					></input>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						defaultValue="12345"
					></input>

					<label htmlFor="descrition"></label>
					<textarea
						id="description"
						name="description"
						defaultValue="This is a description"
					></textarea>

					<fieldset className="fieldSet">
						<legend>Employment Status</legend>
						<label>
							<input
								type="radio"
								name="employmentStatus"
								value="unemployed"
							></input>
							Unemployed
						</label>

						<label>
							<input
								type="radio"
								name="employmentStatus"
								value="part time"
							></input>
							Part Time
						</label>

						<label>
							<input
								type="radio"
								name="employmentStatus"
								value="full time"
								defaultChecked={true}
							></input>
							Full time
						</label>
					</fieldset>

					<fieldset className="nutrition">
						<legend>Nutrition</legend>
						<label>
							<input
								type="checkbox"
								name="nutritionVal"
								value="protein"
								defaultChecked={true}
							></input>
							Protein
						</label>

						<label>
							<input
								type="checkbox"
								name="nutritionVal"
								value="fiber"
							></input>
							Fibers
						</label>

						<label>
							<input
								type="checkbox"
								name="nutritionVal"
								value="carbs"
							></input>
							Carbs
						</label>
					</fieldset>

					<div className="selectSection">
						<label htmlFor="favColor">
							<p>What is your favorite language?</p>
							<select
								id="favColor"
								name="progLang"
								defaultValue="react"
								required
							>
								<option value="" disabled>
									{' '}
									Choose a language
								</option>
								<option value="react">React</option>
								<option value="js">Vanilla JS</option>
								<option value="django">Django</option>
								<option value="python">Python</option>
								<option value="c">C</option>
								<option value="r">R</option>
							</select>
						</label>
					</div>

					<button>Submit</button>
				</form>
			</section>
		</>
	);
}

export default App;
