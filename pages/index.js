import React from 'react';
import ProductsList from '../components/ProductList';
import AddProductModal from '../components/AddProductModal';
import { DM_Sans } from "next/font/google";
import { Container } from "../components/Container";

import styles from '../styles/HomePage.module.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: '400',
})

const HomePage = () => {
  return (
    <Container rootClassName={dmSans.className}>
      <div className={styles['heading-wrapper']}>
        <h1>Product list</h1>
        <p>You can add you own products right here:</p>
      </div>

      <AddProductModal />
      <ProductsList />
    </Container>
  );
};

export default HomePage;
