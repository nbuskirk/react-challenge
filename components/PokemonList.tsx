import React from 'react';
import { PokemonProps, PokemonsProps } from '../types/PokemonProps';

const PokemonList = ({ pokemons }: PokemonsProps) => {
  return pokemons.map((pokemon: PokemonProps) => <div>{pokemon.name}</div>);
};

export default PokemonList;
