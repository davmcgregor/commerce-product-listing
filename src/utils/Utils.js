export const searchProducts = (currentProducts, term) => {
  return currentProducts
    .filter(
      (product) =>
        `${product.productName} ${product.type}`
          .toLowerCase()
          .indexOf(term.toLowerCase()) >= 0
    )
    .map((product) => product);
};

export const selectProducts = (currentProducts, value) => {
  return currentProducts
    .filter((product) => product.type === value)
    .map((product) => product);
};
