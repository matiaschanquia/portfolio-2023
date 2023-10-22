import "./App.css"; 
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Proyects from "./components/Proyects";

function App() {
	return(
		<div className="app">
			<Header />
			<AboutMe />
			<Proyects />
		</div>
	);
}

export default App;
