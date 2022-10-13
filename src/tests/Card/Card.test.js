import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/Card/Card';

const pokemon = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/'
}

test('renders Card component', () => {
  render(<Card pokemon={pokemon} />);
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeInTheDocument();
});

test('click on Card component', () => {
  const searchPokemonDetail = jest.fn();
  render(<Card pokemon={pokemon} searchPokemonDetail={searchPokemonDetail} />);
  const cardElement = screen.getByTestId('card');
  cardElement.click();
  expect(searchPokemonDetail).toHaveBeenCalled();
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