import ProductsData from '../data/Products.json';

import {searchProducts, selectProducts} from './Utils';

describe('Utils', () => {
  test('searches products using an input string', () => {
    expect(searchProducts(ProductsData, 'beer').length).toBe(4);
    expect(searchProducts(ProductsData, 'Wine').length).toBe(2);
    expect(searchProducts(ProductsData, 'Panhead').length).toBe(1);
  });

  test('select product by type using an input value', () => {
    expect(selectProducts(ProductsData, 'Cider').length).toBe(1);
    expect(searchProducts(ProductsData, 'Wine').length).toBe(2);
    expect(searchProducts(ProductsData, 'Water').length).toBe(0);
  });
});
