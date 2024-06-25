import { PokemonProps } from './PokemonProps';

export interface DataProps {
  next?: string;
  previous?: string;
  count: number;
  results: PokemonProps[];
}

