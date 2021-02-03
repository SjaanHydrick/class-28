/* eslint-disable max-len */

const URL = 'http://newsapi.org/v2/';
const key = 'apiKey=4b0a4dfc3eaf451ca50ef5397cec328e';

export const getArticles = () => {
  return fetch(`${URL}top-headlines?` + 'country=us&' + `${key}`)
    .then(res => res.json());
};

export const getSearchArticles = (search) => {
  return fetch(`${URL}everything?` + `q=${search}` + `${key}`)
    .then(res => res.json());
};
