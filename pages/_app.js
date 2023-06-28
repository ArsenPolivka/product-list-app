import React from 'react';

import { ProductProvider } from "../context/product/ProductProvider";

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ProductProvider>
			<Component {...pageProps} />
		</ProductProvider>
	);
};

export default MyApp;
