import React, { useState } from 'react';

export function SearchForm(props) {
  const [searchValue, setSearchValue] = useState('');

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className="input-group my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={searchValue}
        onChange={handleChange}
      />
      <input
        className="btn btn-outline-secondary"
        value="Search"
        type="submit"
        id="button-addon2"
        onClick={() => {
          props.filterUsers(searchValue);
        }}
      />
    </div>
  );
}
