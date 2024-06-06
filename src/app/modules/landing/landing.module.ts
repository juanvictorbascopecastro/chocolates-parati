import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { AccountComponent } from './pages/account/account.component';
import { SharedModule } from '../../shared/shared.module';
import * as LandingComponents from './components';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AccountComponent,
    ...LandingComponents.components,
    LayoutComponent,
    ProductsComponent,
    SucursalesComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
