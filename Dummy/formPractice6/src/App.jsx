import { useState } from 'react';
import './App.css';

function App() {
	function submitForm(event) {
		event.preventDefault();
		const emailForm = new FormData(event.target);
		const email = emailForm.get('formEmail');
		console.log(email);
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
					></input>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						id="password"
					></input>
					<button>Submit</button>
				</form>
			</section>
		</>
	);
}

export default App;
