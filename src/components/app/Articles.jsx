import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import styles from '../container/NewsSearch.css';

const Articles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <div className={styles.article} key={article.title}>
      <Article {...article} />
    </div>
  ));

  return (
    <div>
      {articleElements}
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string
  }))
};

export default Articles;
