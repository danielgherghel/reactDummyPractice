import './App.css';

function App() {
	function submitForm(e) {
		e.preventDefault();
		const newDataForm = new FormData(e.target);
		const getData = Object.fromEntries(newDataForm);
		const getCountries = newDataForm.getAll('countryArr');
		const newEntries = {
			...getData,
			getCountries,
		};
		console.log(newEntries);
	}

	return (
		<>
			<section>
				<h1>Sign in</h1>
				<form onSubmit={submitForm}>
					<fieldset>
						<legend>How do I feel</legend>
						<label>
							Crap
							<input type="radio" name="ratioTest"></input>
						</label>
						<label>
							Good
							<input
								type="radio"
								name="ratioTest"
								defaultChecked={true}
							></input>
						</label>
						<label>
							Great
							<input type="radio" name="ratioTest"></input>
						</label>
					</fieldset>

					<fieldset>
						<legend>Country</legend>
						<label>
							<input
								type="checkbox"
								name="countryArr"
								value="italy"
							></input>
							Italy
						</label>
						<label>
							<input
								type="checkbox"
								name="countryArr"
								value="england"
							></input>
							England
						</label>
						<label>
							<input
								type="checkbox"
								name="countryArr"
								value="Croatia"
							></input>
							Croatia
						</label>
						<label>
							<input
								type="checkbox"
								name="countryArr"
								value="Slovenia"
								defaultChecked={true}
							></input>
							Slovenia
						</label>
					</fieldset>

					<div>
						<label htmlFor="favItem">
							<p>What is your favorite gadget?</p>
							<select
								id="favItem"
								name="itemSelect"
								required
								defaultValue="monitor"
							>
								<option value="" disabled>
									--Select a value--
								</option>
								<option value="laptop">laptop</option>
								<option value="watch">watch</option>
								<option value="monitor">monitor</option>
								<option value="headphones">
									headphones
								</option>
							</select>
						</label>
					</div>
					<br />
					<button>Send it</button>
				</form>
			</section>
		</>
	);
}

export default App;
