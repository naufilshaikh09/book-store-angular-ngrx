import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CatalogService } from "../services/catalog.service";
import { CatalogPageActions } from "./actions/catalog-page.actions";
import { EMPTY, catchError, map, mergeMap, of, tap, throwError } from "rxjs";
import { itemsLoadedSuccess } from "./actions/catalog-api.actions";

@Injectable()
export class CatalogEffect {

  constructor(
    private actions$: Actions,
    private articleService: CatalogService
  ) {
    debugger
    console.log("calling");
  }

  loadArticles$ = createEffect(() => this.actions$
    .pipe(
      ofType(CatalogPageActions.getItems),
      mergeMap(() => this.articleService.getItems()
        .pipe(
          // tap(data => console.log((data))),
          map(items => (itemsLoadedSuccess({ data: items }))),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
          // tap(data => console.log((data))),
          // catchError(this.handleError)
        ))
    ))

  private handleError(err: any) {
    debugger
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
