import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../api/products';

import styles from '../styles/Product.module.css';
import {Button} from "./Button";
import classNames from "classnames";

const Product = ({ product, className }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		deleteProduct(product.id).then(response => {
			console.log(response);
		});
	};

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles['product-info']}>
				<h2 className={styles.name}>{product.name}</h2>
				<p className={styles.description}>{product.description}</p>
			</div>
			<Button variant="secondary" onClick={handleDelete}>Delete</Button>
		</div>
	);
};

export default Product;
