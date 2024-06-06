import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PaymentCardComponent } from './pages/payment-card/payment-card.component';
import { AccountComponent } from './pages/account/account.component';
import { ProductsComponent } from './pages/products/products.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'productos',
    component: ProductsComponent,
  },
  {
    path: 'sucursales',
    component: SucursalesComponent,
  },
  {
    path: 'registrar-tarjeta',
    component: PaymentCardComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
