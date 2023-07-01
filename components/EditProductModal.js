import React, { useState } from 'react';

import { Input } from "./Input";
import { Button } from "./Button";
import { Img } from "./Image";
import { ExitButton } from "./ExitButton";
import { editProduct } from "../api/products";

import styles from '../styles/EditProductModal.module.css';

export const EditProductModal = ({ product, setIsEditModalOpened }) => {
	const [name, setName] = useState(product?.name);
	const [description, setDescription] = useState(product?.description);
	const [count, setCount] = useState(product?.count);
	const [size, setSize] = useState(product?.size);
	const [weight, setWeight] = useState(product?.weight);

	const handleSubmit = async () => {
		await editProduct({ name, count, size, weight, description }, product?.id);

		setIsEditModalOpened(false);

		setName('');
		setDescription('');
		setCount('');
		setSize('');
		setWeight('');
	};

	return (
		<div className={styles.wrapper}>
			<form
				className={styles.form}
				onSubmit={handleSubmit}
			>
				<h2 className={styles.heading}>
					Edit product
				</h2>

				<Img />

				<div className={styles['input-wrapper']}>
					<Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
					<Input type="text" value={count} onChange={e => setCount(e.target.value)} placeholder="Count" required />
					<Input type="text" value={size} onChange={e => setSize(e.target.value)} placeholder="Size" required />
					<Input type="text" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Weight" required />
					<Input textarea rows={4} type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
				</div>

				<Button
					variant="primary"
					type="submit"
					wide
				>
					Update
				</Button>
			</form>

			<ExitButton setIsModalOpened={setIsEditModalOpened}/>
		</div>
	);
};
