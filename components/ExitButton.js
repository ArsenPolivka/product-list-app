import React, {useContext} from "react";

import styles from "../styles/ExitButton.module.css";

export const ExitButton = ({ setIsModalOpened }) => {
	const closeModal = () => {
		setIsModalOpened(false);
	}

	return (
		<div className={styles['close-wrapper']}>
			<button
				className={styles.close}
				onClick={closeModal}
			>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
		</div>
	)
}
