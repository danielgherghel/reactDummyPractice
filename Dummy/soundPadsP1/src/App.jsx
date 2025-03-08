import './App.css';
import { useState } from 'react';
import pads from './pads';

function App({ darkMode }) {
	const [newPads, setNewPads] = useState(pads);

	const styles = {
		backgroundColor: darkMode ? '#222222' : '#cccccc',
	};

	const newStiles = (item) => {
		return {
			backgroundColor: item % 2 === 0 ? 'blue' : 'black',
		};
	};

	const padsEl = newPads.map((item) => (
		<button
			key={item.id}
			style={newStiles(item.id)}
		></button>
	));

	return (
		<main>
			<div className="pad-container">{padsEl}</div>
		</main>
	);
}

export default App;
