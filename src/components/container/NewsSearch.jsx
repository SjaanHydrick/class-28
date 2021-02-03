import React, { Component } from 'react';
import { getArticles, getSearchArticles } from '../../NewsApi';
import Articles from '../app/Articles';
import Search from '../app/Search';

export default class NewsSearch extends Component {
    state = {
      search: '',
      loading: false,
      articles: []
    }

    componentDidMount = async() => {
      getArticles()
        .then(articles => this.setState({ articles }));
    }

    handleSearch = e => {
      this.setState({
        search: e.target.value
      });
    }

    handleClick = async(e) => {
      e.preventDefault();

      getSearchArticles(this.state.search)
        .then(articles => this.setState({ articles }));
    }

    render() {
      const { articles } = this.state;
      return (
        <>
          <Search 
            handleSearch={this.handleSearch}
            handleClick={this.handleClick}
          />
          <Articles
            articles={articles} 
          />
        </>
      );
    }
}
