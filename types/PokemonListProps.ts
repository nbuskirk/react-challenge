import { PokemonProps } from './PokemonProps';

export interface PokemonListProps {
  pokemons: PokemonProps[], 
  setPageNumber: (pageNumber: number) => void
}