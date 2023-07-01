import React, {useContext, useEffect, useState} from 'react';

import { ProductContext } from "../context/product/context";

import { Comment } from './Comment';
import { Img } from "./Image";
import { ExitButton } from "./ExitButton";
import { Input } from "./Input";
import { Button } from "./Button";

import styles from '../styles/ProductView.module.css'
import {addComment} from "../api/products";

export const ProductView = ({ productId , setIsProductModalOpened}) => {
	const [product, setProduct] = useState(null);
	const [comment, setComment] = useState('')

	const { productList } = useContext(ProductContext);

	useEffect(() => {
		async function getProduct() {
			productList.map((product) => {
				productId = product.id && setProduct(product);

			});
		}

		getProduct();
	}, [])

	const handleSubmit = async (event) => {
		event.preventDefault();

		await addComment({ comment });

		setComment('');
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.productCard}>
				<div className={styles.content}>
					<Img
						component={ProductView}
						rootClassName={styles.image}
					/>

					<div className={styles.contentWrapper}>
						<h2 className={styles.name}>
							{product?.name}
						</h2>

						<div className={styles.infoWrapper}>
							<p className={styles.infoItem}>
								Count: {product?.count}
							</p>
							<p className={styles.infoItem}>
								Size: {product?.size}
							</p>
							<p className={styles.infoItem}>
								Weight: {product?.weight}
							</p>
						</div>
					</div>
				</div>

				<p className={styles.description}>
					Description: {product?.description}
				</p>

				<form
					className={styles.comment}
					onSubmit={handleSubmit}
				>
					<p className={styles.label}>
						Comment:
					</p>

					<div className={styles.inputWrapper}>
						<Input
							type="text"
							value={comment}
							onChange={e => setComment(e.target.value)}
							placeholder="Comment this product..."
							rootClassName={styles.input}
							required
						/>

						<Button
							rootClassName={styles.button}
							variant="secondary"
							type="submit"
						>
							Submit
						</Button>
					</div>
				</form>

				<div className={styles.commentList}>
					{product?.commentList ? product?.commentList.map((comment, index) => (
						<Comment
							key={index}
							comment={comment}
						/>
					)) : (
						<div>No comments...</div>
					)}
				</div>
			</div>

			<ExitButton setIsModalOpened={setIsProductModalOpened}/>
		</div>
	);
};
