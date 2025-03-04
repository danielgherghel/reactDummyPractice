import { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

function App() {
	const [userName, setUserName] = useState('Dingo');

	return (
		<>
			<Header userName={userName} />
			<Body userName={userName} />
		</>
	);
}

export default App;
