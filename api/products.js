export async function getAllProducts() {
	const response = await fetch(`http://localhost:5000/products`, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json'
		},
	});

	const products = await response.json();

	return products;
}

export async function getCurrentProduct(id) {
	const response = await fetch(`http://localhost:5000/products/${id}`);

	const product = await response.json();

	return product;
}

export async function addProduct(body) {
	const response = await fetch(`http://localhost:5000/product/add`, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
	});

	const data = body;

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
}

export async function deleteProduct(id) {
	const response = await fetch(`http://localhost:5000/product/delete/${id}`, {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json'
		},
	});
}
