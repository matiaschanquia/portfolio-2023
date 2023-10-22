import "./Proyect.css";

const Proyect = (props) => {
	return(
		<article className="container-proyect">
			<div className="container-preview-proyect">
				<img src={props.preview} alt={props.title} />
			</div>
			<div className="container-data-proyect">
				<h2>{props.title}</h2>
				<p>{props.description}</p>
				<div className="deploy-github">
					<div>
						<a href={props.deploy} target="_blank" rel="noreferrer"><img src="/logos/anchor.svg" alt="Logo link externo"/></a>
						<a href={props.github} target="_blank" rel="noreferrer"><img src="/logos/logo-github.svg" alt="Logo de Github"/></a>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Proyect;