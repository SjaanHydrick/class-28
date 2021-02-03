import React, { Component } from 'react';
import Articles from './Articles';
import Search from './Search';

export default class NewsSearch extends Component {
    state = {
      search: '',
      loading: false,
      articles: []
    }

    render() {
      const { search, loading, articles } = this.state;
      return (
        <>
          <Articles
            loading={loading}
            articles={articles} 
          />

          <Search 
            search={search}
          />
        </>
      );
    }
}
