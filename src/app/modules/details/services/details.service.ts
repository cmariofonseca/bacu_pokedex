import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private pathBase = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getAbility(abilityName: string) {
    return this.http.get(`${this.pathBase}/ability/${abilityName}`);
  }

  getEvolutionChain(id: number) {
    return this.http.get(`${this.pathBase}/evolution-chain/${id}`);
  }

  getGeneration() {
    return this.http.get(`${this.pathBase}/generation`);
  }

  getPokedex(name: string) {
    // getPokedex(id: number) {
    return this.http.get(`${this.pathBase}/pokedex/${name}`);
  }

  getPokemon(name: string) {
    return this.http.get(`${this.pathBase}/pokemon/${name}`);
  }

  getSpecies(name: string) {
    return this.http.get(`${this.pathBase}/pokemon-species/${name}`);
  }

  getType(name: string) {
    return this.http.get(`${this.pathBase}/type/${name}`);
  }
}
