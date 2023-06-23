import React from 'react';

const Comment = ({ comment }) => {
	return (
		<div>
			<p>{comment.description}</p>
			<p>{comment.date}</p>
		</div>
	);
};

export default Comment;
