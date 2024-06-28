import { PokemonProps } from './PokemonProps';

export interface PokemonListProps {
  pokemons: PokemonProps[];
  goToNext: () => void;
  goToPrev: () => void;
  goToFirst: () => void;
  goToLast: () => void;
  maxPage: number;
  pageNumber: number;
}