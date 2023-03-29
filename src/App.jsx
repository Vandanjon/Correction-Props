// afficher deux composants Avatar
import "./App.css";
import Avatar from "./components/Avatar";
import simpsons from "./datas/simpsons";
import Trung from "./components/Trung";

const App = () => {
	return (
		<>
			<Avatar
				image={simpsons[0].image}
				firstName={simpsons[0].firstName}
				lastName={simpsons[0].lastName}
				phone={simpsons[0].phone}
			/>

			<Avatar {...simpsons[1]} />

			<Trung />
		</>
	);
};

export default App;

