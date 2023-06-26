export async function getAllProducts() {
	const response = await fetch(`http://localhost:5000/products`);

	const products = await response.json();

	return products;
}

export async function addProduct(body) {
	const response = await fetch(`http://localhost:5000/product/add`, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
	});

	const data = await response.json();

	return data;
}

export async function editProduct(body, id) {
	const response = await fetch(`http://localhost:5000/product/edit/${id}`, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
	});

	const data = await response.json();

	return data;
}

export async function deleteProduct(id) {
	const response = await fetch(`http://localhost:5000/product/delete/${id}`, {
		method: "DELETE"
	});

	const data = await response.json();

	return data;
}

