export interface PokemonsList {
  count: number;
  next: string;
  previous?: string;
  results: Array<Pokemon>;
}

interface Pokemon {
  name: string;
  url: string;
}
