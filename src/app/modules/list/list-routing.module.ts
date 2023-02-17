import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pokemons',
        component: CatalogueComponent,
      },
      {
        path: '**',
        redirectTo: 'pokemons',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
