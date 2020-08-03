import React, { useState } from 'react';
import '../App.css';
import pokemonsFromApi from '../pokemons.json';
import PokeList from './PokeList';

const App = () => {
  const [pokemons] = useState(pokemonsFromApi);

  return (
    <div className='App'>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
