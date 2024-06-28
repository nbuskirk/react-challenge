import './App.css';
import axios from 'axios';
import Loading from '../components/Loading';
import { DataProps } from '../types/DataProps';
import PokemonList from '../components/PokemonList';
import { PokemonProps } from '../types/PokemonProps';
import React, { ReactNode, useEffect, useState } from 'react';

const App = (): ReactNode => {
  const defaultPokemonToDisplay = 5;
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // using axios so i dont have to parse data json();
    axios
      .get<DataProps>(
        `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${defaultPokemonToDisplay * (pageNumber - 1)}`
      )
      .then(({ data }) => {
        const { results } = data;
        setPokemons(results);
        setLoading(false);
        setMaxPage(Math.ceil(data.count / defaultPokemonToDisplay))
      })
      .catch(() => {
        console.error('uh oh, should i log to a logging svc?');
      });
  }, [pageNumber, defaultPokemonToDisplay]);

  const goToNext = () => {
    if(pageNumber < maxPage) {
      setPageNumber(pageNumber + 1)
    } 
  }

  const goToPrev = () => {
    if(pageNumber <= 1) {
      return
    }
    setPageNumber(pageNumber - 1);
  }

  const goToFirst = () => {
    if(pageNumber <= 1) {
      return
    }
    setPageNumber(1);
  }

  const goToLast = () => {
    if(pageNumber == maxPage) {
      return;
    }
    setPageNumber(maxPage)
  }
  
  return (
    loading ? 
      <Loading /> :
      <PokemonList 
        pokemons={pokemons} 
        goToNext={goToNext} 
        goToPrev={goToPrev} 
        goToFirst={goToFirst} 
        goToLast={goToLast} 
        pageNumber={pageNumber} 
        maxPage={maxPage}
      />
  );
};

export default App;
