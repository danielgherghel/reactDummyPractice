import { useState } from 'react';
import './App.css';
import RenEl from './RenEl';

function App() {
	const [countMessages, setCountMessages] = useState([
		'a',
		'b',
		'c',
		'd',
		'e',
	]);

	function showAllMessages() {
		if (countMessages.length === 0) {
			return 'You have no unread messages';
		} else if (countMessages.length === 1) {
			return 'You have 1 unread message';
		} else if (countMessages.length > 1) {
			return `You ahve ${countMessages.length} unread messages`;
		}
	}

	return (
		<>
			<div>{showAllMessages(countMessages)}</div>
			<br></br>
			<RenEl />
		</>
	);
}

export default App;
