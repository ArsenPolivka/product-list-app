import React, {useEffect} from 'react';

import { deleteProduct } from '../api/products';
import { Button } from "./Button";

import styles from '../styles/DeleteProductModal.module.css';

export const DeleteProductModal = ({ product, setIsModalOpened }) => {
	const closeModal = () => {
		setIsModalOpened(false);
	}

	const handleDelete = async () => {
		await deleteProduct(product.id);
		closeModal();
	};

	useEffect(() => {
		handleDelete();
	}, [])

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modal}>
				<p className={styles.text}>
					Are you sure you want to delete this product?
				</p>

				<div className={styles.buttons}>
					<Button
						variant="secondary"
						onClick={handleDelete}
						wide
					>
						Yes
					</Button>

					<Button
						variant="secondary"
						onClick={closeModal}
						wide
					>
						No
					</Button>
				</div>
			</div>
		</div>
	);
};
