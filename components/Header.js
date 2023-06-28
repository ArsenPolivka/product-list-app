import React, { useState } from "react";

import { Button } from "./Button";
import { AddProductModal } from "./AddProductModal";

import headerStyles from "../styles/HomePage.module.css";

export const Header = () => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	const openModal = () => {
		setIsModalOpened(!isModalOpened);
	}

	return (
		<>
			<header className={headerStyles['heading-wrapper']}>
				<div className={headerStyles.heading}>
					<h1>Product list</h1>
					<p>You can add you own products right here:</p>
				</div>

				<div className={headerStyles.buttons}>
					<Button
						rootClassName={headerStyles.add}
						variant="primary"
						onClick={openModal}
					>
						Add
					</Button>
				</div>
			</header>

			{ isModalOpened && <AddProductModal setIsModalOpened={setIsModalOpened}/> }
		</>
	)
}
