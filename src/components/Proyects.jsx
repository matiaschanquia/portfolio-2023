import { useEffect, useState } from "react";
import "./Proyects.css";
import axios from "axios";
import Proyect from "./Proyect";

const Proyects = () => {

	const [proyects, setProyects] = useState([]);

	useEffect(() => {
		axios.get("/data/proyects.json")
			.then(result => {
				setProyects(result.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return(
		<section className="proyects">
			<div className="content-proyects">
				<h2>Proyectos</h2>
				<div className="container-proyects">
					{
						proyects.map(proyect => (
							<Proyect key={proyect.id} title={proyect.title} description={proyect.description} github={proyect.github} deploy={proyect.deploy} preview={proyect.preview}/>
						))
					}
				</div>
			</div>
		</section>	
	);
};

export default Proyects;