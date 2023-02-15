import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [CatalogueComponent, ListComponent, PokemonComponent],
  imports: [CommonModule, ListRoutingModule, SharedModule],
})
export class ListModule {}
