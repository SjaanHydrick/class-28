import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, handleClick }) => (
  <>
    <form onSubmit={handleClick}>
      <input
        type="text"
        onChange={handleSearch}
      />
      <button>Search</button>
    </form>
  </>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Search;
