import { useState } from 'react';
import './App.css';

function App() {
	const [messages, setMessages] = useState([
		'a',
		'b',
		'xzsa',
	]);

	function showMessagesStatus(messages) {
		if (messages.length === 0) {
			return "You're caught up!";
		} else if (messages.length === 1) {
			return `You have exactly ${messages.length} unread message!`;
		} else if (messages.length > 1) {
			return `You have ${messages.length} unread messages`;
		}
	}

	return (
		<>
			<div>
				<h1>{showMessagesStatus(messages)}</h1>
			</div>
		</>
	);
}

export default App;
