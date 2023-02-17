import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  showBar: boolean = false;

  constructor(private router: Router, private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.pokemonsListToBuy.subscribe((pokemonsList) => {
      if (pokemonsList.length > 1) {
        this.showBar = true;
      }
    });
  }

  toFooter() {
    this.router.navigate(['/shopping-cart']);
  }
}
