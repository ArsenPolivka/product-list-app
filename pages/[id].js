import React from 'react';
import { useRouter } from 'next/router';
import ProductView from '../components/ProductView';
import EditProductModal from '../components/EditProductModal';

const ProductPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<h1>Product Details</h1>
			<ProductView productId={id} />
			<EditProductModal productId={id} />
		</div>
	);
};

export default ProductPage;
