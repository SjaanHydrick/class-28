import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Article from './Article';
import Articles from './Articles';
import Search from './Search';

describe('App component', () => {

  afterEach(() => cleanup());

  it('renders Articles', () => {
    const articles = [{ title: '', author: '', url: '', urlToImage: '', description: '' }];
    const { asFragment } = render(<Articles articles={articles}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render Article', () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render Search', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
