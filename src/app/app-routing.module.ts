import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { Error404Component } from './shared/pages/error404/error404.component';
import { Error401Component } from './shared/pages/error401/error401.component';
import { LayoutComponent } from './modules/landing/layout/layout.component';
import { RegisterComponent } from './shared/pages/register/register.component';

const routes: Routes = [
  {
    path: 'tienda',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrarme',
    component: RegisterComponent,
  },
  {
    path: 'error-404',
    component: Error404Component,
  },
  {
    path: 'error-401',
    component: Error401Component,
  },
  {
    path: '**',
    redirectTo: 'tienda',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
