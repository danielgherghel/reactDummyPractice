import { useState } from 'react';
import avatar from './images/user.jpg';
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

	function updateFav() {
		setContact((prevContact) => ({
			...prevContact,
			isFavorite: !prevContact.isFavorite,
		}));
	}

	return (
		<>
			<main>
				<article className="card">
					<img src={avatar} className="avatar"></img>

					<Star
						isFilled={contact.isFavorite}
						handleClick={updateFav}
					/>

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
