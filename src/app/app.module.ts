import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Principal routes
import { AppRoutingModule } from './app-routing.module';

// Modules
import { SharedModule } from './shared/shared.module';
import { DetailsModule } from './modules/details/details.module';
import { ListModule } from './modules/list/list.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DetailsModule,
    ListModule,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
