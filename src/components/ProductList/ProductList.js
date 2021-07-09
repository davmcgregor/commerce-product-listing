import React, {useEffect, useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';

import ProductCard from '../ProductCard/ProductCard';

import './ProductList.css';

const ProductList = () => {
  const {fetchProducts, products, loading, error} = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || error) {
    return (
      <p>
        {loading && 'Loading...'}
        {error && 'Something went wrong, please try again'}
      </p>
    );
  } else if (products) {
    return (
      <section className="cards">
        {products.map((product) => (
          <ProductCard key={product.index} product={product} />
        ))}
      </section>
    );
  }
};

export default ProductList;
