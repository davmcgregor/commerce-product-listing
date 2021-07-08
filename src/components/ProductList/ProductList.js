import React, {useEffect, useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';

import ProductCard from '../ProductCard/ProductCard';

import './ProductList.css';

const ProductList = () => {
  const {fetchProducts, products, loading, error} = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);

  return (
    <main>
      <ProductCard />
    </main>
  );
};

export default ProductList;
