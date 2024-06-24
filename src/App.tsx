import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';
import { DataProps } from '../types/DataProps';
import './App.css';
import { PokemonProps, PokemonsProps } from '../types/PokemonProps';

const App = (): ReactNode => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  useEffect(() => {
    // using axios so i dont have to parse data json();
    axios
      .get<DataProps>(
        `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${5 * pageNumber}`
      )
      .then(({ data }) => {
        const { results } = data;
        setPokemons(results);
      });
  }, []);
  return <PokemonList pokemons={pokemons} />;
};

export default App;
