import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const ProductView = ({ productId }) => {
	const product = useSelector(state => state.products.find(product => product.id === productId));

	return (
		<div>
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			{product.comments.map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default ProductView;
