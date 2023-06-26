import React, { useEffect, useState } from 'react';
import { Product } from './Product';

import styles from '../styles/ProductList.module.css';
import { getAllProducts } from "../api/products";

const ProductsList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts().then(response => {
			setProducts(response);
		})
	}, []);

	if (!products.length) {
		return <p>Loading...</p>;
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
