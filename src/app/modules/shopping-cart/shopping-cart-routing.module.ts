import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparativeComponent } from './pages/comparative/comparative.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pokemons',
        component: ComparativeComponent,
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
export class ShoppingCartRoutingModule {}
