import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./home/page-not-found/page-not-found.component";
import {CartShellComponent} from "./cart/cart-shell/cart-shell.component";
import {LoginComponent} from "./user/login/login.component";
import {CatalogShellComponent} from "./catalog/catalog-shell/catalog-shell.component";

const routes: Routes = [
  {
    path:"",
    component: CatalogShellComponent,
    children:[
      {
        path: 'catalog',
        loadChildren: () =>
          import('./catalog/catalog.module').then(m => m.CatalogModule)
      },
      // { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    ]
  },
  {
    path:"login",
    component: LoginComponent,
    children:[
      {
        path: 'login',
        loadChildren: () =>
          import('./user/user.module').then(m => m.UserModule)
      },
      // { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  {
    path:"cart",
    component:
    CartShellComponent,
    children:[
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then(m => m.CartModule)
      },
      // { path: '', redirectTo: 'cart', pathMatch: 'full' },
    ]
  },
  {path:"**", component: PageNotFoundComponent},
  // {path:"", component: CatalogShellComponent},
  // {path:"login", component: LoginComponent},
  // {path:"cart", component: CartShellComponent},
  // {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
