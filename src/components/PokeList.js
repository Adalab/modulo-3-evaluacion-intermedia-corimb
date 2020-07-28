import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const items = props.pokemons.map((pokemon) => {
    return (
      <li className='poke' key={pokemon.id}>
        <Pokemon
          name={pokemon.name}
          types={pokemon.types}
          evolution={pokemon.evolution}
          url={pokemon.url}
        />
      </li>
    );
  });

  return (
    <div>
      <h2>Mi lista de pokemons</h2>
      <ul className='pokes'>{items}</ul>
    </div>
  );
};

export default PokeList;
