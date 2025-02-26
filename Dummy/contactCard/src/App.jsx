import { useState } from 'react';
import avatar from './images/user.jpg';
import starFilled from './images/filled-star.jpg';
import starEmpty from './images/star.png';
import Star from './components/Star';

import './App.css';

function App() {
	const [contact, setContact] = useState({
		firstName: 'John',
		lastName: 'Doe',
		phone: '+1 (212) 555-1212',
		email: 'joe@dot.com',
		isFavorite: false,
	});

	return (
		<>
			<main>
				<article className="card">
					<img src={avatar} className="avatar"></img>
					<Star isFilled={contact.isFavorite} />

					<div className="info">
						<h2 className="name">
							{contact.firstName} {contact.lastName}
						</h2>
						<p className="contact">{contact.phone}</p>
						<p className="contact">{contact.email}</p>
					</div>
				</article>
			</main>
		</>
	);
}

export default App;
