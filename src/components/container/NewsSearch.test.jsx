global.fetch = require('node-fetch');

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch container', () => {
  it('on changing search refetch articles', () => {
    render(<NewsSearch />);

    const display = screen.getByTestId('article');
    const searchInput = screen.getByTestId('searchBar');
    const submitButton = screen.getByTestId('submitButton');
    fireEvent.change(searchInput, {
      target: {
        value: 'ducks'
      }
    });
    fireEvent.submit(submitButton);

    return waitFor(() => {
      expect(display).toHaveTextContent('Ducks');
    });
  });
});
