import React, { useEffect, useState } from 'react';

import { Product } from './Product';
import { getAllProducts } from "../api/products";

import styles from '../styles/ProductList.module.css';

const ProductsList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts().then(response => {
			setProducts(response);
		})
	}, []);

	if (!products.length) {
		return <p className={styles.noProducts}>There are no products in your list...</p>;
	}

	return (
		<div>
			{products.map(product => (
				<Product
					className={styles.product}
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default ProductsList;
