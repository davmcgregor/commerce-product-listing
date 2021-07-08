import React, {useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';

import './Search.css';

const Search = () => {
  const {query, filterBySearch} = useContext(ProductsContext);

  const handleChange = (e) => {
    filterBySearch(e.target.value);
  };

  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      aria-label="Search for products"
      data-testid="input"
    />
  );
};

export default Search;
