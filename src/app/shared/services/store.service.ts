import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  pokemonName = new BehaviorSubject<string>('');

  constructor() {}

  setPokemonName(name: string) {
    this.pokemonName.next(name);
  }
}
