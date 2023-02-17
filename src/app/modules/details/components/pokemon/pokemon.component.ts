import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonName!: string;
  pokemon!: any;
  available: boolean = true;

  constructor(
    private router: Router,
    private storeService: StoreService,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.getPokemonName();
  }

  getPokemonName() {
    this.storeService.pokemonName.subscribe((name) => {
      this.pokemonName = name;
      this.getPokemonDetails();
    });
  }

  getPokemonDetails() {
    if (this.pokemonName) {
      this.detailsService.getPokemon(this.pokemonName).subscribe({
        next: (pokemon: any) => {
          const { height, id, name, stats, types, weight } = pokemon;
          this.pokemon = {
            abilities: [],
            height: height,
            id: id,
            image: pokemon.sprites.other['official-artwork'].front_default,
            name: name,
            stats: stats,
            types: types,
            weight: weight,
          };
          pokemon.abilities.forEach((ability: any) => {
            this.getAbility(ability.ability.name);
          });
        },
        error: () => {
          this.router.navigate(['/list']);
        },
        complete: () => {
          this.storeService.setPokemonName('');
        },
      });
    }
  }

  getAbility(abilityName: string) {
    this.detailsService.getAbility(abilityName).subscribe((ability: any) => {
      const newAbility = {
        name: abilityName,
        description: ability.effect_entries.map((effectEntry: any) => {
          if (effectEntry.language.name === 'en') {
            return effectEntry.effect;
          }
        }),
      };
      this.pokemon.abilities.push(newAbility);
    });
  }

  toList() {
    this.router.navigate(['/list']);
  }

  pokemonsListToBuy() {
    this.available = false;
    this.storeService.setPokemonsListToBuy(this.pokemon.name);
  }
}
