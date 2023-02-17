import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('src/app/modules/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('src/app/modules/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('src/app/modules/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
