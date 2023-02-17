import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { WhateverComponent } from './components/whatever/whatever.component';
import { ComparativeComponent } from './pages/comparative/comparative.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    WhateverComponent,
    ComparativeComponent
  ],
  imports: [CommonModule, ShoppingCartRoutingModule],
})
export class ShoppingCartModule {}
