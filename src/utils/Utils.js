import ProductsData from '../data/Products.json';

export const searchProducts = (term) => {
  return ProductsData.filter(
    (product) =>
      `${product.productName} ${product.type}`
        .toLowerCase()
        .indexOf(term.toLowerCase()) >= 0
  ).map((product) => product);
};

export const selectProducts = (value) => {
  return ProductsData.filter((product) => product.type === value).map(
    (product) => product
  );
};
