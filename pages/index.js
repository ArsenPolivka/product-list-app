import React from 'react';
import ProductsList from '../components/ProductList';
import AddProductModal from '../components/AddProductModal';
import { DM_Sans } from "next/font/google";
import { Container } from "../components/Container";

import styles from '../styles/HomePage.module.css';
import {Button} from "../components/Button";
import {Header} from "../components/Header";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: '400',
})

const HomePage = () => {
  return (
    <Container rootClassName={dmSans.className}>
      <Header />
      <ProductsList />
    </Container>
  );
};

export default HomePage;
