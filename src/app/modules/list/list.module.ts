import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';

// Components
import { PokemonsComponent } from './components/pokemons/pokemons.component';

@NgModule({
  declarations: [PokemonsComponent],
  imports: [CommonModule, ListRoutingModule],
})
export class ListModule {}
