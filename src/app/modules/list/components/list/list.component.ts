import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  scrollPosition!: number;
  pokemons!: Array<any>;
  nextRequest!: string;
  gettingData: boolean = false;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.pokemons = [];
    this.getScrollPositionInPercentage();
    this.fillPokemonsList();
  }

  getScrollPositionInPercentage() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);
      this.scrollPosition = scrollPercentRounded;
      if (this.scrollPosition > 90) {
        this.fillPokemonsList();
      }
    });
  }

  fillPokemonsList() {
    if (!this.gettingData) {
      this.listService.getPokemonsList(this.nextRequest).subscribe({
        next: (pokemonsList) => {
          this.gettingData = true;
          this.nextRequest = pokemonsList.next;
          pokemonsList.results.forEach((pokemon, index) => {
            this.listService.getPokemon(pokemon.name).subscribe({
              next: (pokemonDetail) => {
                this.pokemons.push(pokemonDetail);
              },
              complete: () => {},
            });
          });
        },
        complete: () => {
          this.gettingData = false;
        },
      });
    }
  }
}
