export interface PokemonDataProps {
  name: string;
  abilities: AbilityProps[];
}

export interface AbilityProps {
  ability: {
    name: string;
    url: string;
  };
}

export interface AbilityEffectProps {
  name: string;
  effect: string;
}

export interface EffectDataProps {
  language: {
    name: string;
  },
}