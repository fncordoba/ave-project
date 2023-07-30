import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState({});
  const [error, setError] = useState(null);

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => {
        setPokemonData(response.data);
        setError(null);
      })
      .catch(err => {
        setError('Pokémon not found');
        setPokemonData({});
      });
  }

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      searchPokemon();
    }
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="App">
      <input type="text" value={pokemonName} onChange={handleChange} onKeyPress={handleKeyPress} placeholder="Enter Pokémon name or number"/>
      <button onClick={searchPokemon}>Search</button>
      {error && <div>{error}</div>}
      {pokemonData.name && 
        <div>
          <h1>{capitalizeFirstLetter(pokemonData.name)}</h1>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} style={{ width: '150px' }}/>
          <h2>Number: {pokemonData.id}</h2>
          <h2>Type: {pokemonData.types.map(type => type.type.name).join(', ')}</h2>
          <h2>Height: {pokemonData.height}</h2>
          <h2>Weight: {pokemonData.weight}</h2>
        </div>
      }
    </div>
  );
}

export default App;
