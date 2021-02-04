import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, url, urlToImage, author, description }) => (
  <figure>
    <a href={url}><h2>{title}</h2></a>
    <img src={urlToImage} />
    <h3>{author}</h3>
    <p>{description}</p>
  </figure>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string.isRequired
};

export default Article;
