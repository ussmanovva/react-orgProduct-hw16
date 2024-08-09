import { useState, useEffect } from "react";
import FoodCard from "./components/FoodCard";
import FoodList from "./components/FoodList";

const App = () => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		const storedFoods = JSON.parse(localStorage.getItem("foods")) || [];
		setFoods(storedFoods);
	}, []);

	useEffect(() => {
		localStorage.setItem("foods", JSON.stringify(foods));
	}, [foods]);

	const handleClick = (food) => {
		setFoods((prevFoods) => {
			const index = prevFoods.findIndex((item) => item.id === food.id);

			if (index !== -1) {
				const updatedFoods = [...prevFoods];
				updatedFoods[index].amount += 1;
				return updatedFoods;
			}

			return [...prevFoods, { ...food, amount: 1 }];
		});
	};

	const updateAmount = (id, amount) => {
		setFoods((prevFoods) => {
			return prevFoods.map((item) =>
				item.id === id
					? { ...item, amount: Math.max(1, item.amount + amount) }
					: item
			);
		});
	};

	return (
		<div>
			<FoodCard handleClick={handleClick} />
			<FoodList food={foods} updateAmount={updateAmount} />
		</div>
	);
};

export default App;
