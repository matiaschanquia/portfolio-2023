import axios from "axios";
import { getCurrentYear } from "../utils/day";
import "./Footer.css";
import { useEffect, useRef } from "react";

const Footer = () => {

	const likeRef = useRef(null);

	useEffect(() => {
		const likeLS = localStorage.getItem("like");

		if(likeLS) {
			likeRef.current.classList.remove("active");
		}
	}, []);

	const handleClick = (e) => {
		const likeLS = localStorage.getItem("like");
		if(likeLS) {
			console.log("No puedes volver a dar like");
			return;
		}

		let tag = e.target;
		if(!e.target.classList.contains("like-btn")) {
			tag = tag.parentElement;
		}
		tag.classList.remove("active");

		axios.post("https://portfolio-backend-chanquia.up.railway.app/api/likes")
			.then(() => {
				localStorage.setItem("like", JSON.stringify(true));
				console.log("Like dado correctamente");
			})
			.catch(err => {
				console.log(err);
				tag.classList.add("active");
			});
	};

	return(
		<footer className="footer">
			<div className="mensaje-like">
				Deja tu me gusta <ion-icon name="arrow-forward-outline"></ion-icon> 
				<button className="like-btn active" onClick={handleClick} ref={likeRef}>
					<ion-icon name="heart-outline"></ion-icon>
				</button>
			</div>
			<p>
				&copy; Copyright Matias Chanquia - {getCurrentYear()}
			</p>
		</footer>
	);
};

export default Footer;