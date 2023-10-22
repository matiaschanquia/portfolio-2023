import "./App.css"; 
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Proyects from "./components/Proyects";

function App() {
	return(
		<div className="app">
			<Header />
			<AboutMe />
			<Proyects />
			<Footer />
		</div>
	);
}

export default App;
