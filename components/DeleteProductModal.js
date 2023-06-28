import React from 'react';
import classNames from "classnames";

import { Button } from "./Button";

import styles from '../styles/DeleteProductModal.module.css';

export const DeleteProductModal = ({ handleDeleteConfirmation, handleCancel }) => {
	return (
		<div className={classNames(styles.modalWrapper)}>
			<div className={styles.modal}>
				<p className={styles.text}>
					Are you sure you want to delete this product?
				</p>

				<div className={styles.buttons}>
					<Button
						variant="secondary"
						onClick={handleDeleteConfirmation}
						wide
					>
						Yes
					</Button>

					<Button
						variant="secondary"
						onClick={handleCancel}
						wide
					>
						No
					</Button>
				</div>
			</div>
		</div>
	);
};
