import React, {useState, useCallback, useEffect} from 'react';
import Card from './components/Card/Card';
import CardDetail from './components/CardDetail/CardDetail';
import './App.css';

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [pokePage, setPokePage] = useState();
  const URL = 'https://pokeapi.co/api/v2/pokemon';

  const searchPokemonDetail = (name) => {
    name && fetch(`${URL}/${name}`)
      .then((res) => res?.json())
      .then((data) => {
        setPokemonDetail(data);
        setShowDetail(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = useCallback((e) => {
    searchPokemonDetail(e.target.value);
  }, []);


  useEffect(() => {
    fetch(`${URL}/?offset=0&limit=4`)
      .then((res) => res?.json())
      .then((data) => {
        setPokePage(data);
      }
    )
  }, []);

  const handlePagination = (move) => {
    fetch(pokePage?.[move])
      .then((res) => res?.json())
      .then((data) => {
        setPokePage(data);
      }
    )
  }

  return (
    <div data-testid="app" className="App">
      <h1 className='App-title'>Listado de Pokémon</h1>
      <div className='App-input-container'>
        <input type="text" className='input input--size-big' placeholder='Buscar' onChange={handleInputChange} />
      </div>
      <div className='App-pokemons-container'>
        <div className='App-pokemons'>
          {pokePage?.results?.map((pokemon) => (
            <Card pokemon={pokemon} searchPokemonDetail={searchPokemonDetail}/>
          ))}
        </div>
        <div style={{width: '50%'}}>
          {showDetail ? <CardDetail pokemon={pokemonDetail} /> : null}
        </div>
      </div>
      <div className='App-pagination'>
        <button data-testid="back-button" onClick={() => handlePagination('previous')}>Atrás</button>
        <button data-testid="next-button" onClick={() => handlePagination('next')}>Siguiente</button>
      </div>
    </div>
  );
}

export default App;
