import './App.css';
import { useState } from 'react';
import pads from './pads';
import Pad from './components/Pad';

function App({ darkMode }) {
	const [newPads, setNewPads] = useState(pads);

	const padsEl = newPads.map((item) => {
		return (
			<Pad
				key={item.id}
				color={item.color}
				classToggle={item.on}
				toggle={toggle}
				id={item.id}
			/>
		);
	});

	function toggle(id) {
		console.log(id);
		// map over the pads array and if the current item
		// and if the same id as the one passed to this function,
		// then flip its 'on' value
		setNewPads((prevPads) =>
			prevPads.map((item) => {
				return id === item.id
					? { ...item, on: !item.on }
					: item;
			})
		);
	}

	return (
		<main>
			<div className="pad-container">{padsEl}</div>
		</main>
	);
}

export default App;
