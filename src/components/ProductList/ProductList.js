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

  return (
    <main>
      {(loading || error) && (
        <p>
          {loading && 'Loading...'}
          {error && 'Something went wrong, please try again'}
        </p>
      )}
      {products.length && (
        <section className="cards">
          {products.map((product) => (
            <ProductCard key={product.index} product={product} />
          ))}
        </section>
      )}
    </main>
  );
};

export default ProductList;
