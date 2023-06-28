import React, { useContext, useState } from 'react';
import classNames from "classnames";

import { addProduct } from '../api/products';
import { Input } from "./Input";
import { Button } from "./Button";
import { Image } from "./Image";
import { ExitButton } from "./ExitButton";

import { ProductContext } from "../context/product/context";

import styles from '../styles/AddProductModal.module.css'


export const AddProductModal = ({ className, setIsModalOpened }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [count, setCount] = useState('');
	const [size, setSize] = useState('');
	const [weight, setWeight] = useState('');

	const { addOneProduct } = useContext(ProductContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		const newProduct = { name, count, size, weight, description };

		addProduct(newProduct);
		addOneProduct(newProduct);

		setIsModalOpened(false);

		setName('');
		setDescription('');
		setCount('');
		setSize('');
		setWeight('');
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
