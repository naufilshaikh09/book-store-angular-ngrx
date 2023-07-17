import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { CatalogPageActions } from "src/app/catalog/state/actions/catalog-page.actions";
import { itemAddedSuccess } from "./actions/cart-api.actions";

@Injectable()
export class CartEffect {

  addItemToCart$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CatalogPageActions.addItemToCart),
        map(() => (itemAddedSuccess()))
      )
  });

  constructor(private actions$: Actions) {
  }
}
