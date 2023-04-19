import React from "react";

const CardPost = ({ data }) => {
	return (
		<div>
			<h3> {data?.title.toUpperCase()} </h3>
		</div>
	);
};

export default CardPost;
