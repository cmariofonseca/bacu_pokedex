import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { WhateverComponent } from './pages/whatever/whatever.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [DetailComponent, WhateverComponent, PokemonComponent],
  imports: [CommonModule, DetailsRoutingModule],
})
export class DetailsModule {}
