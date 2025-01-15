import { useState } from 'react';
import './App.css';

function App() {
	const [unreadMessages, setUnreadMessages] = useState([
		'1',
		'2',
		'3',
	]);

	return (
		<div>
			{unreadMessages.length === 0 ? (
				<p>You have no unread message</p>
			) : (
				<h1>
					You have {unreadMessages.length} unread messages!
				</h1>
			)}
		</div>
	);
}

export default App;
