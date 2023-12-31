import React, { useContext, useState } from 'react';
import classNames from "classnames";

import { EditProductModal } from "./EditProductModal";
import { DeleteProductModal } from "./DeleteProductModal";
import { Button } from "./Button";
import { deleteProduct } from "../api/products";

import { ProductContext } from "../context/product/context";

import styles from '../styles/Product.module.css';
import {ProductView} from "./ProductView";
import {Img} from "./Image";

export const Product = ({ product, className }) => {
	const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
	const [isEditModalOpened, setIsEditModalOpened] = useState(false);
	const [isProductModalOpened, setIsProductModalOpened] = useState(false);

	const { deleteProductFromList } = useContext(ProductContext);

	const handleDelete = () => {
		setIsDeleteModalOpened(prevState => !prevState);
	};


	const handleCancelDelete = () => {
		setIsDeleteModalOpened(!isDeleteModalOpened);
	};

	const handleEdit = () => {
		setIsEditModalOpened(!isEditModalOpened);
	}

	const openProduct = () => {
		setIsProductModalOpened(!isProductModalOpened);
	}

	const handleDeleteConfirmation = async () => {
		if (product.id) {
			deleteProductFromList(product.id);
			setIsDeleteModalOpened(false);
			await deleteProduct(product.id)
		} else {
			console.log("Product not found!")
		}
	}

	return (
		<div className={styles.productCard}>
			<div
				onClick={openProduct}
				className={classNames(styles.wrapper, className)}
			>
				<div className={styles['product-info']}>
					<Img component={ Product }/>
					<h2 className={styles.name}>{product.name}</h2>
					<p className={styles.description}>{product.description}</p>
				</div>
			</div>
			<div className={styles.buttons}>
				<Button
					rootClassName={styles.edit}
					variant="secondary"
					onClick={handleEdit}
				>
					Edit
				</Button>

				<Button
					rootClassName={styles.delete}
					variant="secondary"
					onClick={handleDelete}
				>
					Delete
				</Button>
			</div>
			{ isEditModalOpened && (
				<EditProductModal
					product={product}
					setIsEditModalOpened={setIsEditModalOpened}
				/>
			)}

			{ isDeleteModalOpened && (
				<DeleteProductModal
					product={product}
					handleDeleteConfirmation={handleDeleteConfirmation}
					handleCancel={handleCancelDelete}
				/>
			)}

			{ isProductModalOpened && (
				<ProductView setIsProductModalOpened={setIsProductModalOpened}/>
			)}
		</div>
	);
};
