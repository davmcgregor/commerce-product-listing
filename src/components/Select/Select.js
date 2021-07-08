import React, {useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';

import './Select.css';

const Select = () => {
  const {selectValue, filterBySelect} = useContext(ProductsContext);

  const handleChange = (e) => {
    filterBySelect(e.target.value);
  };

  return (
    <div className="select__wrapper">
      <label htmlFor="select">Filter by: </label>

      <select
        value={selectValue}
        onChange={handleChange}
        name="productTypes"
        id="select"
      >
        <option value="All">All</option>
        <option value="Beer">Beer</option>
        <option value="Cider">Cider</option>
        <option value="Wine">Wine</option>
        <option value="Spirits">Spirits</option>
      </select>
    </div>
  );
};

export default Select;
