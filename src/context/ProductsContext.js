import {createContext, useState} from 'react';
import ProductsData from '../data/Products.json';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchProducts = () => {
    try {
      setLoading(true);
      setProducts(ProductsData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        fetchProducts,
        products,
        loading,
        error,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
