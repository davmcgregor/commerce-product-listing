import {render, screen} from '@testing-library/react';

import Header from './Header';
import {ProductsContext} from '../../context/ProductsContext';

test('Header renders a search and select component', () => {
  const store = {query: ''};
  render(
    <ProductsContext.Provider value={store}>
      <Header />
    </ProductsContext.Provider>
  );

  const searchElement = screen.getByPlaceholderText(/search.../i);
  expect(searchElement).toBeInTheDocument();
  expect(screen.getByText('Filter by:')).toBeInTheDocument();
});
