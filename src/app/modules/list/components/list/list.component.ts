import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  pokemons!: Array<any>;
  pokemonDetail: any;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getPokemonsList().subscribe((value) => {
      // console.log(value);
      this.pokemons = value.results;
      // console.log(this.pokemons);
      this.pokemons.forEach((pokemon) => {
        this.listService.getPokemon(pokemon.name).subscribe((pokemonDetail) => {
          console.log(pokemonDetail);
        });
      });
    });
  }
}
