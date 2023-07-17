import { createSelector } from "@ngrx/store";
import { Item } from "../model/catalog.model";
import { State } from ".";

export interface ItemsFeatureState {
  items: Item[],
  error: string
}

export const selectItemsState = (state: State) => state.itemsFeature

export const selectItems = createSelector(
  selectItemsState,
  (state: ItemsFeatureState | undefined) => {
    return state?.items;
  }
)
