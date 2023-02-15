import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pokemons-list',
        component: CatalogueComponent,
      },
      {
        path: '**',
        redirectTo: 'pokemons-list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
