import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './home/menu/menu.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { HomeShellComponent } from './home/home-shell/home-shell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { catalogReducer } from './catalog/state/catalog.reducer';
import { CatalogEffect } from './catalog/state/catalog.effects';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartShellComponent } from './cart/cart-shell/cart-shell.component';
import { CatalogItemComponent } from './catalog/catalog-item/catalog-item.component';
import { CatalogShellComponent } from './catalog/catalog-shell/catalog-shell.component';
import { LoginComponent } from './user/login/login.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    HomeShellComponent,
    CartItemComponent,
    CartShellComponent,
    CatalogItemComponent,
    CatalogShellComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // StoreModule.forRoot({}),
    // EffectsModule.forRoot([]),
    StoreModule.forRoot({ itemsFeature: catalogReducer }),
    EffectsModule.forRoot([CatalogEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule, MatDividerModule, MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
