export async function getAllProducts() {
	const response = await fetch(`http://localhost:5000/products`);

	const products = await response.json();

	return products;
}

export async function deleteProduct(id) {
	const response = await fetch(`http://localhost:5000/product/delete/${id}`, {
		method: "DELETE"
	});

	const data = await response.json();

	return data;
}

