import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <div key={article.title}>
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
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default Articles;
