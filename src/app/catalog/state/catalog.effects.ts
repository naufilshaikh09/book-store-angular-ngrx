import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CatalogService } from "../services/catalog.service";
import { CatalogPageActions } from "./actions/catalog-page.actions";
import { EMPTY, catchError, map, mergeMap, of, tap, throwError } from "rxjs";
import { itemsLoadedFailure, itemsLoadedSuccess } from "./actions/catalog-api.actions";

@Injectable()
export class CatalogEffect {

  loadArticles$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CatalogPageActions.getItems),
        mergeMap(() => this.articleService.getItems()
          .pipe(
            map(items => (itemsLoadedSuccess({ items: items }))),
            catchError(error => of(itemsLoadedFailure({ error })))
          ))
      )
  })

  constructor(
    private actions$: Actions,
    private articleService: CatalogService
  ) {
  }

}
