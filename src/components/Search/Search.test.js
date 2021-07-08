import {render, screen} from '@testing-library/react';

import Search from './Search';
import {ProductsContext} from '../../context/ProductsContext';

test('Search renders an input element with query value', () => {
  const store = {
    query: 'Beer',
  };

  render(
    <ProductsContext.Provider value={store}>
      <Search />
    </ProductsContext.Provider>
  );
  const inputEl = screen.getByTestId('input');
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute('type', 'search');
  expect(screen.getByTestId('input')).toHaveValue('Beer');
});
