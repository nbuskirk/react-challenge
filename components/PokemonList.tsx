import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { PokemonProps } from '../types/PokemonProps';
import { PokemonListProps } from '../types/PokemonListProps';

const PokemonList = ({ pokemons, goToFirst, goToLast, goToPrev, goToNext, pageNumber, maxPage }: PokemonListProps) => {
  return (
    <table className="table-auto w-1/2 m-auto">
      <thead>
        <tr className='py-2 min-h-2 flex bg-sky-300 pl-2'>
          <th>Pokemon Name</th>
        </tr>
      </thead>
      <tbody>
        {/* could break this out into a new component and just pass down a list and that component is just responsible for iterating through that list and rendering a table item. which might be reusable for other tables but for sake of simplicity i left it in this component. Dont want to pre-optimize */}
        {pokemons.map((pokemon: PokemonProps, index: number) => {
          const id = pokemon.url.split('v2/')[1];
          return (
            <tr key={pokemon.name}>
              <td className={`text-black py-2 min-h-2 pl-2 ${index % 2 == 0 ? 'bg-slate-100' : ''}`}>
                <Link to={`/${id}`}>{pokemon.name}</Link>
              </td>
            </tr>
          )})}
          <tr className='min-h-2 flex justify-center bg-sky-200 pl-2'>
            <th>
              {/* not a fan of prop drilling so i'd probably break some of this out to Context depending on reqs and how much more drilling i'd have to do. but for simplicity i'll leave it alone. */}
              <Pagination goToFirst={goToFirst} goToLast={goToLast} goToPrev={goToPrev} goToNext={goToNext} pageNumber={pageNumber} maxPage={maxPage}/>
            </th>
          </tr>
      </tbody>
    </table>
  )
};

export default PokemonList;
