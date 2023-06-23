import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../store/productsSlice';

const DeleteProductModal = ({ productId }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteProduct(productId));
	};

	return (
		<div>
			<p>Are you sure you want to delete this product?</p>
			<button onClick={handleDelete}>Yes</button>
			<button>No</button>
		</div>
	);
};

export default DeleteProductModal;
