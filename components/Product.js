import React, { useState } from 'react';
import classNames from "classnames";

import { DeleteProductModal } from "./DeleteProductModal";
import { Button } from "./Button";

import styles from '../styles/Product.module.css';
import {EditProductModal} from "./EditProductModal";

export const Product = ({ product, className }) => {
	const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
	const [isEditModalOpened, setIsEditModalOpened] = useState(false);

	const handleDelete = () => {
		setIsDeleteModalOpened(!isDeleteModalOpened);
	};

	const handleEdit = () => {
		setIsEditModalOpened(!isEditModalOpened);
	}

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles['product-info']}>
				<h2 className={styles.name}>{product.name}</h2>
				<p className={styles.description}>{product.description}</p>
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

			{ isEditModalOpened && <EditProductModal product={product} setIsEditModalOpened={setIsEditModalOpened} /> }
			{ isDeleteModalOpened && <DeleteProductModal product={product} setIsModalOpened={setIsDeleteModalOpened}/> }
		</div>
	);
};
