import {render, screen} from '@testing-library/react';

import ProductCard from './ProductCard';

test('ProductCard renders information about a product', () => {
  const product = {
    index: 0,
    isSale: false,
    price: '$49.99',
    productImage: 'Product_1.jpeg',
    productName: 'Pure Blonde Crate',
    type: 'Beer',
  };

  render(<ProductCard product={product} />);

  expect(screen.getByText('Pure Blonde Crate')).toBeInTheDocument();
  expect(screen.getByText('$49.99')).toBeInTheDocument();
});
