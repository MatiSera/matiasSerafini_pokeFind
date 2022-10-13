// Test CardDetail component

import React from 'react';
import { render, screen } from '@testing-library/react';

import CardDetail from '../../components/CardDetail/CardDetail';

const pokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  types: [
    {
      type: {
        name: 'grass'
      }
    },
    {
      type: {
        name: 'poison'
      }
    }
  ],
  weight: 69,
  moves: [
    {
      move: {
        name: 'razor-wind'
      }
    }]
}

test('renders CardDetail component', () => {
  render(<CardDetail pokemon={pokemon} />);
  const cardDetailElement = screen.getByTestId('card-detail');
  expect(cardDetailElement).toBeInTheDocument();
});

test('fetch request succeed', async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => ({
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
    })
  });
});