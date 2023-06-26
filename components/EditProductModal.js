import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateProduct } from '../store/productsSlice';

import styles from '../styles/EditProductModal.module.css';
import {Input} from "./Input";
import {Button} from "./Button";
import {Image} from "./Image";
import {ExitButton} from "./ExitButton";

export const EditProductModal = ({ product, setIsEditModalOpened }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState(product.name);
	const [description, setDescription] = useState(product.description);
	const [count, setCount] = useState(product.count);
	const [size, setSize] = useState(product.size);
	const [weight, setWeight] = useState(product.weight);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(updateProduct({ id: product.id, name, description }));
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

				<Image />

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
