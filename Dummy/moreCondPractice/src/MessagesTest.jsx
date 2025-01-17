import { useState } from 'react';

export default function MessagesTest() {
	const [showUnread, setShowUnread] = useState([
		'a',
		'b',
		'c',
	]);

	function getUnreadMessages(showUnread) {
		if (showUnread.length === 0) {
			return 'You have caught up';
		} else if (showUnread.length === 1) {
			return `You have ${showUnread.length} message`;
		} else if (showUnread.length > 1) {
			return `You have ${showUnread.length} messages`;
		}
	}

	return (
		<div>
			<h2>{getUnreadMessages(showUnread)}</h2>
		</div>
	);
}
