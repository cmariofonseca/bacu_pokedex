import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  pokemonName = new BehaviorSubject<string>('');
  pokemonsListToBuy = new BehaviorSubject<Array<string>>(['']);
  pokemonsList: Array<string> = [];

  constructor() {}

  setPokemonName(name: string) {
    this.pokemonName.next(name);
  }

  setPokemonsListToBuy(name: string) {
    this.pokemonsList.push(name);
    this.pokemonsListToBuy.next(this.pokemonsList);
  }

  clearList() {
    this.pokemonsListToBuy.next(['']);
  }
}
