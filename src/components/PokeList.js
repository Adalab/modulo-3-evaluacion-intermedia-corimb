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

  return <ul className='pokes'>{items}</ul>;
};

export default PokeList;
