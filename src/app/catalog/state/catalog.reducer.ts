import { createReducer, on } from "@ngrx/store";
import { ItemsFeatureState } from "./catalog.selector";
import { itemsLoadedSuccess } from "./actions/catalog-api.actions";

export const initialState: ItemsFeatureState = {
  items: []
};

export const catalogReducer = createReducer(
  initialState,
  on(itemsLoadedSuccess, (store, result) => {
    return {
      ...store,
      items: result.data
    }
  })
);
