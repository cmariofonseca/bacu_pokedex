import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/modules/list/services/list.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  namesList!: Array<string>;
  pokemons: Array<any> = [];

  constructor(
    private storeService: StoreService,
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPokemonsListToBuy();
  }

  getPokemonsListToBuy() {
    this.storeService.pokemonsListToBuy.subscribe((list) => {
      const result = list.filter((item, index) => {
        return list.indexOf(item) === index;
      });
      this.namesList = result;
      this.getPokemon();
    });
  }

  getPokemon() {
    if (this.namesList.length > 1) {
      this.namesList.forEach((pokemonName) => {
        this.listService.getPokemon(pokemonName).subscribe({
          next: (pokemonDetail) => {
            this.pokemons.push(pokemonDetail);
          },
          error: () => {
            this.router.navigate(['/list']);
          },
        });
      });
    }
  }

  toList() {
    this.router.navigate(['/list']);
  }

  deleteList() {
    this.storeService.clearList();
    this.pokemons = [];
    this.toList();
  }
}
