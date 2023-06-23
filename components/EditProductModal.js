import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productsSlice';

const EditProductModal = ({ product }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState(product.name);
	const [description, setDescription] = useState(product.description);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(updateProduct({ id: product.id, name, description }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={name} onChange={e => setName(e.target.value)} required />
			<input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
			<button type="submit">Update</button>
		</form>
	);
};

export default EditProductModal;
