import React, { useState, useEffect } from "react";
import { Cardlist } from "./components/cardlist/cardlist";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
	const [monsters, setMonster] = useState([]);
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const data = await res.json();
			setMonster(data);
		};

		fetchData();
	}, []);

	const filteredMonsters = monsters.filter((monster) =>
		// includes will return true or false
		{
			let match = monster.name
				.toLowerCase()
				.match(searchField.toLocaleLowerCase());
			return match;
			// return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		}
	);

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};

	return (
		<div className="App">
			<h2>Wild Monster</h2>
			<SearchBox
				placeholder="search monster.."
				handleChange={handleChange}
			/>
			<Cardlist monsters={filteredMonsters} />
		</div>
	);
};

export default App;
