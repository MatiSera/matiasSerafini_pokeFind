import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  test('fetch request succeed', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => ({
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/'
          }
        ]
      })
    });
  });

});
