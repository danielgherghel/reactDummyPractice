import './App.css';
import { useState } from 'react';

export default function Joke(props) {
	const [isShown, setIsShown] = useState(false);

	function handleClick() {
		setIsShown((prev) => !prev);
	}

	return (
		<div>
			{props.setup && <h3>{props.setup}</h3>}
			{isShown ? <p>{props.punchline}</p> : null}
			<button onClick={handleClick}>
				{isShown ? 'Hide Punchline' : 'Show punchline'}
			</button>
			<hr></hr>
		</div>
	);
}
