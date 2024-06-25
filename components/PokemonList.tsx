import React from 'react';
import { PokemonListProps } from '../types/PokemonListProps';
import { PokemonProps } from '../types/PokemonProps';

const PokemonList = ({ pokemons, setPageNumber }: PokemonListProps) => {
  return (
    <table className="table-auto w-1/2 m-auto">
      <thead>
        <tr className='py-2 w-full min-h-2 flex bg-sky-300 pl-1'>
          <th>Pokemon Name</th>
        </tr>
      </thead>
      <tbody>
        {/* could break this out into a new component and just pass down a list and that component is just responsible for iterating through that list and rendering a table item. which might be reusable for other tables but for sake of simplicity i left it in this component. Dont want to pre-optimize */}
        {pokemons.map((pokemon: PokemonProps, index: number) => {
          return (
            <tr key={pokemon.name}>
              <td key={pokemon.name} className={`text-black py-2 min-h-2 w-full pl-2 ${index % 2 == 0 ? 'bg-slate-100' : ''}`}>
                {pokemon.name}
              </td>
            </tr>
          )})}
          <tr className='py-2 w-full min-h-2 flex justify-center bg-sky-300 pl-2'>
            <th>Insert Pagination Here</th>
          </tr>
      </tbody>
    </table>
  )
};

export default PokemonList;
