import { useState } from 'react';
import Count from './components/Count';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	function add() {
		setCount((prev) => prev + 1);
	}

	function substract() {
		setCount((prev) => prev - 1);
	}

	console.log('App rendered');

	return (
		<>
			<div className="container">
				<div className="counter">
					<button className="minus" onClick={substract}>
						-
					</button>
					<Count number={count} />
					<button className="plus" onClick={add}>
						+
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
