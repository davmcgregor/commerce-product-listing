export const searchProducts = (currentProducts, term) => {
  return currentProducts.filter(
    (product) =>
      `${product.productName} ${product.type}`
        .toLowerCase()
        .indexOf(term.toLowerCase()) >= 0
  );
};

export const selectProducts = (currentProducts, value) => {
  return currentProducts.filter((product) => product.type === value);
};
