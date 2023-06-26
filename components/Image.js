import React from "react";

import styles from "../styles/Image.module.css";

export const Image = () => {
	return (
		<div className={styles.image}>
			<button className={styles.uploadImageButton}>
				Upload image
			</button>
		</div>
	)
}
