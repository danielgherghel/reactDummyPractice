import { useState } from 'react';

export default function RenEl() {
	const [elList, setElList] = useState(['a', 'b', 'c']);

	function renderMessage() {
		if (elList.length === 0) {
			return `You have ${elList.length} unread messages`;
		} else if (elList.length === 1) {
			return `You have ${elList.length} unread messages`;
		} else if (elList.length > 1) {
			return `You have ${elList.length} unread messages`;
		}
	}

	return (
		<>
			<h3>{renderMessage(elList)}</h3>
		</>
	);
}
