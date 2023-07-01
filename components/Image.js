import React from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "../styles/Image.module.css";

export const Img = ({ component, rootClassName }) => {
	return (
		<div className={classNames(styles.image, rootClassName)}>
			{ component?.name === 'Product' ? (
				<Image
					className={styles.asset}
					src="/assets/img.png"
					alt="product placeholder"
					width={150}
					height={150}
				/>
			) : (
				<button className={styles.uploadImageButton}>
					Upload image
				</button>
			)}
		</div>
	)
}
