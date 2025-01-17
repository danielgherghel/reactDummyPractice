import { useState } from 'react';
import MessagesTest from './MessagesTest';
import './App.css';

function App() {
	const [messages, setMessages] = useState(['a', 'b', 'c']);

	function getMessagesLogic(messages) {
		if (messages.length === 0) {
			return "You're all caught up";
		} else if (messages.length === 1) {
			return `You have ${messages.length} unread message`;
		} else if (messages.length > 1) {
			return `you have ${messages.length} unread messages`;
		}
	}

	return (
		<>
			<div>
				<h1>{getMessagesLogic(messages)}</h1>
			</div>
			<MessagesTest />
		</>
	);
}

export default App;
