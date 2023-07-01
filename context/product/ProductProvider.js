import { useEffect, useState } from "react";

import { ProductContext } from "./context";
import { addProduct, getAllProducts } from "../../api/products";

export const ProductProvider = ({ children }) => {
	const [productList, setProductList] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isAddingProduct, setIsAddingProduct] = useState(false);


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


	const addOneProduct = (product) => {
		setIsAddingProduct(true);

		addProduct(product).then(response => {
			if (response) {
				setProductList(prevProducts => [...prevProducts, product]);
				setIsAddingProduct(false);
			}
		});
	}

	const deleteProductFromList = async (id) => {
		await setProductList(productList.filter(product => product.id !== id));
	};


	if (isLoading) {
		return <div>Loading...</div>
	}


	return (
		<ProductContext.Provider value={{ productList, addOneProduct, isAddingProduct, deleteProductFromList }}>
			{ children }
		</ProductContext.Provider>
	)
}