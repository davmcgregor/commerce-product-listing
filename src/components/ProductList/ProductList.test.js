import {render, screen} from '@testing-library/react';

import ProductList from './ProductList';
import {ProductsContext} from '../../context/ProductsContext';

import ProductsData from '../../data/Products.json';

test('ProductCard renders information about a product', () => {
  const store = {
    products: ProductsData,
    fetchProducts: () => [],
  };

  render(
    <ProductsContext.Provider value={store}>
      <ProductList />
    </ProductsContext.Provider>
  );

  expect(screen.getAllByRole('img')).toHaveLength(8);
});
