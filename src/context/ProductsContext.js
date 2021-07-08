import {createContext, useState} from 'react';
import ProductsData from '../data/Products.json';
import {selectProducts} from '../utils/Utils';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [selectValue, setSelectValue] = useState('All');

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

  const filterProducts = (value) => {
    setSelectValue(value);
    if (value === 'All') {
      setProducts(ProductsData);
    } else {
      setProducts(selectProducts(value));
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        fetchProducts,
        products,
        loading,
        error,
        selectValue,
        filterProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
