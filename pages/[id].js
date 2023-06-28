import React from 'react';

import { useRouter } from 'next/router';
import { ProductView } from '../components/ProductView';

const ProductPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<h1>Product Details</h1>
			<ProductView productId={id} />
		</div>
	);
};

export default ProductPage;
