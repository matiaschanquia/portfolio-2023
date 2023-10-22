import { useEffect, useState } from "react";
import { getYearOfDate } from "../utils/day";
import Time from "./Time";
import axios from "axios";
import "./AboutMe.css";

const AboutMe = () => {

	const [links, setLinks] = useState([]);
	const [hardSkills,  setHardSkills] = useState([]);
	const [hardSkillsText,  setHardSkillsText] = useState([]);

	useEffect(() => {
		axios.get("/data/links.json")
			.then(result => {
				setLinks(result.data);
			})
			.catch(err => {
				console.log(err);
			});
		axios.get("/data/skills.json")
			.then(result => {
				setHardSkills(result.data.hard);	
				setHardSkillsText(result.data.hardText);	
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return(
		<section className="about-me">
			<div className="content-about-me">
				<div className="primer-fila">
					<div className="container-photo-me">
						<img src="./photo-me.jpg" alt="Foto de Matias Chanquia" />
					</div>
					<div className="about-me-text">
						<h1 className="name"><span>Matias</span> Chanquia</h1>
						<p>
							Tengo <Time date="2001-07-28T00:00:00Z"/> años y soy de Argentina. Soy desarrollador Frontend Trainee hace <Time date="2021-07-01T00:00:00Z"/> años cuando empecé con HTML y CSS.
						</p>
						<p>
							Mi gusto por la programación comenzó en el año <time dateTime="2019-01-01T00:00:00Z">{getYearOfDate	("2019-01-01T00:00:00Z")}</time> cuando realicé un curso del lenguaje Python desde cero.
						</p>
						<p>
							Actualmente estoy aprendiendo sobre el desarrollo Backend y estoy en búsqueda de mi primer empleo como desarrollador.
						</p>
					</div>
					<div className="container-redes">
						<div>
							{
								links.map(link => (
									<a key={link.id} href={link.link} target="_blank" rel="noreferrer">
										<img src={link.logo} alt={`Logo de ${link.red}`} /> 
										{link.text}
									</a>
								))
							}

						</div>
					</div>
					<div className="container-habilidades">
						<h2 className="subtitle">Habilidades</h2>
						<div className="skills-logos">
							{
								hardSkills.map(hardSkill => (
									<img key={hardSkill.id} src={hardSkill.logo} alt={`Logo de ${hardSkill.text}`} />
								))
							}
						</div>
						<ul className="skills-texts">
							{
								hardSkillsText.map(hardSkillText => (
									<li key={hardSkillText.id}><ion-icon name="arrow-forward-outline"></ion-icon> {hardSkillText.text}</li>
								))
							}
						</ul>
					</div>
				</div>
				<div className="segunda-fila">
					<div className="container-educacion">
						<h2 className="subtitle">Educación</h2>
						<ul className="list">
							<li>
								<span>
									<time dateTime="2023-03-01">Marzo 2023</time> - Actualidad
								</span>
								<div>
									<p>Ingles desde cero.</p>
									<p>Blue Academia</p>
								</div>
							</li>
							<li>
								<span>
									<time dateTime="2023-02-01">Febrero 2023</time> - <time dateTime="2023-04-01">Abril 2023</time>
								</span>
								<div>
									<p>Desarrollo Web Inicial.</p>
									<p>Argentina Programa - UTN</p>
								</div>
							</li>
							<li>
								<span>
									<time dateTime="2014-01-01">2014</time> - <time dateTime="2019-12-31">2019</time>
								</span>
								<div>
									<p>Bachiller en Ciencias Naturales.</p>
									<p>Colegio de María</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="container-experiencia">
						<h2 className="subtitle">Experiencia</h2>
						<ul className="list">
							<li>
								<span>
									<time dateTime="2023-05-15">Mayo 2023</time> - Actualidad
								</span>
								<div>
									<p>Auxiliar administrativo.</p>
									<p>Cyre - Supermercados Cordiez</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;