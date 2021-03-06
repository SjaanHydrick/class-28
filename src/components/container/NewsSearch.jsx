import React, { Component } from 'react';
import { getArticles, getSearchArticles } from '../../NewsApi';
import Articles from '../app/Articles';
import Search from '../app/Search';
import styles from '../container/NewsSearch.css';

export default class NewsSearch extends Component {
    state = {
      search: '',
      loading: false,
      articles: []
    }

    componentDidMount = async() => {
      this.setState({ loading: true });

      await getArticles()
        .then(articles => this.setState({ articles }));
    
      this.setState({ loading: false });
    }

    handleSearch = e => {
      this.setState({
        search: e.target.value
      });
    }

    handleClick = async(e) => {
      e.preventDefault();

      this.setState({ loading: true });

      await getSearchArticles(this.state.search)
        .then(articles => this.setState({ articles }));

      this.setState({ loading: false });
    }

    render() {
      const { articles } = this.state;
      return (
        <div data-testid="article">
          <Search 
            handleSearch={this.handleSearch}
            handleClick={this.handleClick}
          />

          { this.state.loading
            ? <p className={styles.loading}>GATHERING NEWS...</p>
            :
            <Articles
              articles={articles} 
            />  
          }
        </div>
      );
    }
}
