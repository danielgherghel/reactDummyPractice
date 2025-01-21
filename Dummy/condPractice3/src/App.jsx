import { useState } from 'react';
import './App.css';

function App() {
	const [messages, setMessages] = useState(['a', 'b']);

	function handleMessages(messages) {
		if (messages.length === 0) {
			return "You've caught up!";
		} else if (messages.length === 1) {
			return `You have ${messages.length} unread messages`;
		} else if (messages.length > 1) {
			return `You have ${messages.length} unread messages!`;
		}
	}

	return (
		<>
			<div>
				<h1>{handleMessages(messages)}</h1>
			</div>
		</>
	);
}

export default App;
