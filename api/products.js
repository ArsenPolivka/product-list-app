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

export async function addProduct(body) {
	try {
		console.log("called")
		const response = await fetch(`http://localhost:5000/product/add`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const newProduct = await response.json();

		return newProduct;
	} catch (error) {
		console.error('There was a problem with the fetch operation: ' + error.message);
	}
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

export async function addComment(body) {
	const response = await fetch(`http://localhost:5000/product/comment/add`, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
	})
}
