import {createContext, useState} from 'react';
import ProductsData from '../data/Products.json';
import {selectProducts, searchProducts} from '../utils/Utils';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [query, setQuery] = useState('');
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

  const filterBySelect = (value) => {
    setSelectValue(value);
    if (value === 'All') {
      setProducts(ProductsData);
    } else {
      setProducts(selectProducts(ProductsData, value));
    }
  };

  const filterBySearch = (term) => {
    setQuery(term);
    if (term === '') {
      //search within selected results
      if (selectValue !== 'All') {
        setProducts(selectProducts(ProductsData, selectValue));
      } else {
        setSelectValue('All');
        setProducts(ProductsData);
      }
    } else {
      setProducts(searchProducts(ProductsData, term));
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
        filterBySelect,
        query,
        setQuery,
        filterBySearch,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
