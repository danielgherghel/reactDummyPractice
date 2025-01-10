import './App.css';

function App() {
	function submitForm(e) {
		e.preventDefault();
		const newData = new FormData(e.target);
		const emailData = newData.get('emailInput');
		const pswData = newData.get('passwordInput');

		console.log('Email: ', emailData);
		console.log('Paswod:', pswData);
	}

	return (
		<>
			<section className="sectionContainer">
				<form
					className="formContainer"
					onSubmit={submitForm}
				>
					<h1>Sign up</h1>
					<label htmlFor="emailInput">Email sign up</label>
					<input
						type="email"
						placeholder="type in your email..."
						name="emailInput"
						id="emaiInput"
					></input>
					<label>Password</label>
					<input
						type="password"
						placeholder="type in the password"
						name="passwordInput"
					></input>
					<button>Submit</button>
				</form>
			</section>
		</>
	);
}

export default App;
