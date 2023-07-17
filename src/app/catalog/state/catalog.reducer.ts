import { createReducer, on } from "@ngrx/store";
import { ItemsFeatureState } from "./catalog.selector";
import { itemsLoadedSuccess } from "./actions/catalog-api.actions";

export const initialState: ItemsFeatureState = {
  items: [],
  error: ""
};

export const catalogReducer = createReducer<ItemsFeatureState>(
  initialState,
  on(itemsLoadedSuccess, (store, result): ItemsFeatureState => {
    return {
      ...store,
      items: result.items,
      error: ""
    }
  })
);
