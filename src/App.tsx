import { useEffect } from "react";
import "./App.css";

function App() {
	useEffect(() => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.text())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<p>Employee</p>
		</>
	);
}

export default App;
