import { useState } from 'react';

export default function Pad(props) {
	// const [getToggle, setGetToggle] = useState(
	// 	props.classToggle
	// );

	const color = {
		backgroundColor: props.color || '#fff',
	};

	return (
		<>
			<button
				style={color}
				className={props.classToggle ? 'on' : null}
				onClick={() => props.toggle(props.id)}
			></button>
		</>
	);
}
