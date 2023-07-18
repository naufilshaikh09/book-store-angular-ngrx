import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartShellComponent } from './cart-shell/cart-shell.component';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart.reducer';
import { CartEffect } from './state/cart.effects';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';

const cartRoutes: Routes = [
  { path: '', component: CartShellComponent }
];

@NgModule({
  declarations: [
    CartItemComponent,
    CartShellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes),
    StoreModule.forFeature("cartFeature", cartReducer),
    EffectsModule.forFeature([CartEffect]),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CartModule { }
