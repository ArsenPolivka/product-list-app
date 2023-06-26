import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from "classnames";

import { addProduct } from '../store/productsSlice';
import { Input } from "./Input";
import { Button } from "./Button";

import styles from '../styles/AddProductModal.module.css'
import {Image} from "./Image";
import {ExitButton} from "./ExitButton";

export const AddProductModal = ({ className, isModalOpened, setIsModalOpened }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [count, setCount] = useState('');
	const [size, setSize] = useState('');
	const [weight, setWeight] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addProduct({ name, description }));
		setName('');
		setDescription('');
	};

	return (
		<div className={styles.wrapper}>
			<form
				className={classNames(styles.form, styles[className])}
				onSubmit={handleSubmit}
			>
				<h2 className={styles.heading}>Add product</h2>

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
					Add
				</Button>
			</form>

			<ExitButton setIsModalOpened={setIsModalOpened}/>
		</div>
	);
};
