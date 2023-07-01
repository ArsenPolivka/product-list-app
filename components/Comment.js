import React from 'react';

export const Comment = ({ comment }) => {
	return (
		<div>
			<p>{comment?.description}</p>
			<p>{comment?.date}</p>
		</div>
	);
};
