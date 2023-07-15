import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogShellComponent } from './catalog-shell/catalog-shell.component';
import {CatalogItemComponent} from "./catalog-item/catalog-item.component";

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
  ]
})
export class CatalogModule { }
