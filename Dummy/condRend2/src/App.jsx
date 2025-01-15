import './App.css';
import Joke from './Joke';
import jokesData from './jokesData';

function App() {
	const jokeElements = jokesData.map((item) => {
		return (
			<Joke
				key={item.id}
				setup={item.setup}
				punchline={item.punchline}
			/>
		);
	});

	return <>{jokeElements}</>;
}

export default App;
