import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';
import {Input} from "./Input";
import styles from '../styles/AddProductModal.module.css'
import {Button} from "./Button";
const AddProductModal = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addProduct({ name, description }));
		setName('');
		setDescription('');
	};

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit}
		>
			<div className={styles['input-wrapper']}>
				<Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
				<Input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
			</div>
			<Button
				variant="primary"
				type="submit"
			>
				Add
			</Button>
		</form>
	);
};

export default AddProductModal;
