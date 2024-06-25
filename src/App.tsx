import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';
import { DataProps } from '../types/DataProps';
import './App.css';
import { PokemonProps } from '../types/PokemonProps';
import Loading from '../components/Loading';

const App = (): ReactNode => {
  const defaultPokemonToDisplay = 5;
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [totalPokemon, setTotalPokemon] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // using axios so i dont have to parse data json();
    axios
      .get<DataProps>(
        `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${defaultPokemonToDisplay * pageNumber}`
      )
      .then(({ data }) => {
        const { results } = data;
        setPokemons(results);
        setTotalPokemon(data.count);
        setLoading(false);
      });
  }, [pageNumber]);

  const goToNext = () => {
    setPageNumber(pageNumber + 1)
  }

  const goToFirst = () => {
    setPageNumber(0);
  }

  const goToPrev = () => {
    setPageNumber(pageNumber - 1);
  }

  const goToLast = () => {
    setPageNumber(totalPokemon - defaultPokemonToDisplay)
  }
  
  return (
    loading ? 
      <Loading /> :
      <PokemonList pokemons={pokemons} goToNext={goToNext} goToPrev={goToPrev} goToFirst={goToFirst} goToLast={goToLast}/>
  );
};

export default App;
