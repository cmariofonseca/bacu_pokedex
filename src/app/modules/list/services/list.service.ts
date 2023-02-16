import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonsList } from '../interfaces/pokemons-list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private pathBase = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonsList(nextRequest: string): Observable<PokemonsList> {
    const url = nextRequest || `${this.pathBase}/pokemon`;
    return this.http.get<PokemonsList>(url);
  }

  getPokemon(name: string) {
    return this.http.get(`${this.pathBase}/pokemon/${name}`);
  }

  getAbility(id: number) {
    return this.http.get(`${this.pathBase}/ability/${id}`);
  }
}
