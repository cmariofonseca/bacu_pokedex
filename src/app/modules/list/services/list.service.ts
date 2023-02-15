import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonsList } from '../interfaces/pokemons-list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private pathBase = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonsList(): Observable<PokemonsList> {
    return this.http.get<PokemonsList>(this.pathBase);
  }

  getPokemon(name: string) {
    return this.http.get(`${this.pathBase}${name}`);
  }
}
