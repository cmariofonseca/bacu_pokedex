import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  namePokemon = new BehaviorSubject<string>('');

  constructor() {}

  setNamePokemon(name: string) {
    this.namePokemon.next(name);
  }
}
