import { useState } from 'react';

export default function Header(props) {
	return (
		<header>
			<p>{props.userName}</p>
		</header>
	);
}
