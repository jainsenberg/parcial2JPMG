import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
	const [post, setPost] = useState([]);

	const fetchPost = async () => {
		const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
		const { data } = res;
		setPost(data.results);
		// console.log(data.results);
	};

	useEffect(() => {
		fetchPost();
	}, []);

	return <PostContext.Provider value={{ post: post }}>{children}</PostContext.Provider>;
};
