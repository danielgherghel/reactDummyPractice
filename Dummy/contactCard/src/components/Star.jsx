import starFilled from '../images/filled-star.jpg';
import starEmpty from '../images/star.png';

export default function Star(props) {
	const starIcon = props.isFilled ? starFilled : starEmpty;

	return (
		<>
			<button
				className="favorite-button"
				onClick={props.handleClick}
			>
				<img src={starIcon} className="favorite"></img>
			</button>
		</>
	);
}
