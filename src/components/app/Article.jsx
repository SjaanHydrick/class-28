import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <figure>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p>{description}</p>
  </figure>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired
};

export default Article;
