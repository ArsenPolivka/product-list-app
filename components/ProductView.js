import React, {useContext, useEffect, useState} from 'react';
import Comment from './Comment';
import {ProductContext} from "../context/product/context";

export const ProductView = ({ productId }) => {
	const [product, setProduct] = useState(null);
	const { productList } = useContext(ProductContext);

	useEffect(() => {
		async function getProduct() {
			productList.map((product) => {
				productId = product.id && setProduct(product);
			});
		}

		getProduct();
	}, [])

	return (
		<div>
			<h2>{product?.name}</h2>
			<p>{product?.description}</p>
			{product?.comments.map(comment => (
				<Comment key={comment?.id} comment={comment} />
			))}
		</div>
	);
};
