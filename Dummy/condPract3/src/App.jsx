import { useState } from 'react';
import './App.css';

function App() {
	const [showNotifications, setShowNotifications] =
		useState(['a', 'b', 'c', 'd']);

	function updateNotifications(item) {
		if (showNotifications.length === 0) {
			return "You're up to date";
		} else if (showNotifications.length === 1) {
			return `You have ${showNotifications.length} unread message`;
		} else if (showNotifications.length > 1) {
			return `You have ${showNotifications.length} unread messages`;
		}
	}

	return (
		<>
			<h2>{updateNotifications(showNotifications)}</h2>
		</>
	);
}

export default App;
