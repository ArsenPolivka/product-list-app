import React, {useContext, useEffect, useMemo, useState} from 'react';

import { Product } from './Product';
import { ProductContext } from "../context/product/context";

import styles from '../styles/ProductList.module.css';
import {deleteProduct} from "../api/products";

export const ProductsList = () => {
	const { productList } = useContext(ProductContext);

	if (!productList?.length) {
		return <p className={styles.noProducts}>There are no products in your list...</p>;
	}

	return (
		<div className={styles.productList}>
			{productList.map((product, index) => (
				<Product
					className={styles.product}
					key={index}
					product={product}
				/>
			))}
		</div>
	);
};
