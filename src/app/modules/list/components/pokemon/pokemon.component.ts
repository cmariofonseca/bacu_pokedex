import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: any;

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit(): void {}

  toPokemonDetails() {
    this.storeService.setPokemonName(this.pokemon.name);
    this.router.navigate(['/details']);
  }
}
