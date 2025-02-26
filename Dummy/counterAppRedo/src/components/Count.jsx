export default function Count(props) {
	console.log('App rendered from Count');

	return (
		<>
			<h2 className="count">{props.number}</h2>
		</>
	);
}
