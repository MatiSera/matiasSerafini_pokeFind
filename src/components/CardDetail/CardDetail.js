import React from 'react';
import './CardDetail.css';

const CardDetail = ({ pokemon }) => {
  const buildSprites = () => {
    const sprites = [];
    for (const key in pokemon?.sprites) {
      if (pokemon?.sprites[key]) {
        pokemon?.sprites[key] && sprites.push(
          <img key={pokemon?.sprites[key]} src={pokemon?.sprites[key]} alt="" />
        );
      };
    };
    return sprites;
  };

  return (
    <div data-testid="card-detail" className='poke-detail-container'>
      <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} className="pokemon-image" />
      <h2 className='title'>#{pokemon?.id}</h2>
      <h1 className='title'>{pokemon?.name}</h1>
      <div>
        <h4>Types</h4>
        <div style={{display: 'flex'}}>
          {pokemon?.types?.map((type) => (
            <p key={type?.type?.name}>{type?.type?.name} </p>
          ))}
        </div>
      </div>
      <div>
        <h4>Peso</h4>
        <p>{pokemon?.weight}kg</p>
      </div>
      <div>
        <h4>Sprites</h4>
        {buildSprites()}
      </div>
      <h4>Movimientos</h4>
      <div className='moves'>
        <ul className='moves-list'>
          {pokemon?.moves?.map((move) => (
            <li>{move?.move?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardDetail;
