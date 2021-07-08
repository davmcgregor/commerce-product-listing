import React, {useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';

const Search = () => {
  const {query, filterBySearch} = useContext(ProductsContext);

  const handleChange = (e) => {
    filterBySearch(e.target.value);
  };

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        aria-label="Search for products"
        data-testid="input"
      />
    </div>
  );
};

export default Search;
