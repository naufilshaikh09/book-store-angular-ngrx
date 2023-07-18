import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogShellComponent } from './catalog-shell/catalog-shell.component';
import { CatalogItemComponent } from "./catalog-item/catalog-item.component";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { StoreModule } from '@ngrx/store';
import { catalogReducer } from './state/catalog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffect } from './state/catalog.effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const catalogRoutes: Routes = [
  { path: '', component: CatalogShellComponent }
];

@NgModule({
  declarations: [
    CatalogItemComponent,
    CatalogShellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(catalogRoutes),
    StoreModule.forFeature("itemsFeature", catalogReducer),
    EffectsModule.forFeature([CatalogEffect]),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CatalogShellComponent,
    CatalogItemComponent
  ]
})
export class CatalogModule {
}
