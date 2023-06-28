import { useEffect, useState } from "react";

import { ProductContext } from "./context";
import { getAllProducts } from "../../api/products";

export const ProductProvider = ({ children }) => {
	const [productList, setProductList] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchProducts() {
			const response = await getAllProducts();

			if (response) {
				setProductList(response);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				// TODO: Throw error
			}
		}

		fetchProducts();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>
	}

	const addOneProduct = (product) => {
		setProductList(prevProducts => [...prevProducts, product]);
	}

	const deleteProductFromList = async (id) => {
		await setProductList(productList.filter(product => product.id !== id));
	};

	return (
		<ProductContext.Provider value={{ productList, addOneProduct, deleteProductFromList }}>
			{ children }
		</ProductContext.Provider>
	)
}