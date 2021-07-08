import {render, fireEvent} from '@testing-library/react';

import Select from './Select';
import {ProductsContext} from '../../context/ProductsContext';

test('Select chooses an option element', () => {
  const store = {
    selectValue: 'Beer',
    filterBySelect: () => [],
  };

  const {getByTestId, getAllByTestId} = render(
    <ProductsContext.Provider value={store}>
      <Select />
    </ProductsContext.Provider>
  );
  let options = getAllByTestId('select-option');
  expect(options.length).toBe(5);
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
});
