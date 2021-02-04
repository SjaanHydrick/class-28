import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, handleClick }) => (
  <>
    <form onSubmit={handleClick}>
      <input
        type="text"
        onChange={handleSearch}
        data-testid="searchBar"
      />
      <button data-testid="submitButton">Search</button>
    </form>
  </>
);

Search.propTypes = {
  handleSearch: PropTypes.func,
  handleClick: PropTypes.func
};

export default Search;
