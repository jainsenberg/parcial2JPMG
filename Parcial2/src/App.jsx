import React, { useContext } from "react";
import CardPost from "./components/CardPost";
import { PostContext } from "./context/postContext";
import Counter from "./components/Counter";

const App = () => {
	const { post } = useContext(PostContext);
	return (
		<div>
			<h1>hola</h1>
			{post.map((post, idx) => {
				return <CardPost key={idx} data={post}></CardPost>;
			})}
		</div>
	);
};

export default App;
