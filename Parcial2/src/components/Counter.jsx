import { useState } from "react";

const Counter = () => {
	const [number, setNumber] = useState(0);
	console.log("COMPONENTE CONTADOR");

	return (
		<div>
			<button
				onClick={() => {
					setNumber(number + 1);
				}}>
				+1
			</button>
			<h1>{number}</h1>
		</div>
	);
};

export default Counter;
