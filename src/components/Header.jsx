import { getCurrentYear } from "../utils/day";
import "./Header.css";

const Header = () => {
	return(
		<header className="header">
			<div className="content-header">
				<h1 className="title">Porta<span>folio</span></h1>
				<ion-icon name="close-sharp"></ion-icon>
				<div className="about">
					<h1>Matias Chanquia</h1>
					<h2>desarrollador / {getCurrentYear()}</h2>
				</div>
			</div>
		</header>
	);
};

export default Header;