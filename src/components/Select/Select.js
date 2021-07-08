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
        data-testid="select"
      >
        <option value="All" data-testid="select-option">
          All
        </option>
        <option value="Beer" data-testid="select-option">
          Beer
        </option>
        <option value="Cider" data-testid="select-option">
          Cider
        </option>
        <option value="Wine" data-testid="select-option">
          Wine
        </option>
        <option value="Spirits" data-testid="select-option">
          Spirits
        </option>
      </select>
    </div>
  );
};

export default Select;
