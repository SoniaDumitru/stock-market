import React from 'react';

const SearchBar = (props) => {

  return (
    <div>
      <strong>Sort by: </strong>
        <label>
          <input
          type="radio"
          value="Alphabetically"
          checked={props.sortBy === "Alphabetically"}
          onChange={props.handleRadio}/>
          Alphabetically
        </label>
        <label>
          <input
          type="radio"
          value="Price"
          checked={props.sortBy === "Price"}
          onChange={props.handleRadio}/>
          Price
        </label>
    </div>
  )
}

export default SearchBar;
