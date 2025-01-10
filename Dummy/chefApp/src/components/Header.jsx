import chefLogo from '/images/chef.jpg';
import './header.css';

export default function HeaderComp() {
	return (
		<>
			<header className="chefHeader">
				<img src={chefLogo} className="chefLogo"></img>
				<h1>Chef Generator</h1>
			</header>
		</>
	);
}
