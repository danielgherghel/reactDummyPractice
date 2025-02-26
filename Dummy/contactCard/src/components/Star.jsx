import starFilled from '../images/filled-star.jpg';
import starEmpty from '../images/star.png';

export default function Star(props) {
	let iconStar = props.isFilled ? starFilled : starEmpty;

	return (
		<>
			<button className="favorite-button">
				<img src={iconStar} className="favorite"></img>
			</button>
		</>
	);
}
