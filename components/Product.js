import Modal from 'react-modal';
import { useState } from "react";

export const Item = ({ isOpen, setIsOpen }) => {
	return (
		<div>
			<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}> <h1>Modal Content</h1> </Modal>

		</div>
	)
}