import React, {useState, useEffect} from 'react';
import './Card.css';

const Card = ({ pokemon, searchPokemonDetail }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(pokemon?.url)
      .then((res) => res?.json())
      .then((data) => {
        setPokemonData(data);
      }
    );
  }, [pokemon])

  return (
    <div data-testid="card" className='card' onClick={() => searchPokemonDetail(pokemonData?.name)}>
      <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name} className="card-image" />
      <h3>#{pokemonData?.id}</h3>
      <h2>{pokemonData?.name}</h2>
    </div>
  );
}

export default Card;
