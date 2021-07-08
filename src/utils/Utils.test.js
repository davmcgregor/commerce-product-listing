import {searchProducts, selectProducts} from './Utils';

describe('Utils', () => {
  test('searches products using an input string', () => {
    expect(searchProducts('beer').length).toBe(4);
    expect(searchProducts('Wine').length).toBe(2);
    expect(searchProducts('Panhead').length).toBe(1);
  });

  test('select product by type using an input value', () => {
    expect(selectProducts('Cider').length).toBe(1);
    expect(searchProducts('Wine').length).toBe(2);
    expect(searchProducts('Water').length).toBe(0);
  });
});
