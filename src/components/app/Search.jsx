import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form>
        <input className="searchbar"
          type="text" 
        />
        <button className="search">Search</button>
      </form>
    );
  }
}
