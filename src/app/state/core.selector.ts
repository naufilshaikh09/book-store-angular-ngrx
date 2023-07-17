import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartFeatureState } from "../cart/state/cart.selector";

export interface ShellState {
}

export const selectCartFeature = createFeatureSelector<CartFeatureState>("cartFeature");

export const selectNumberOfCartItems = createSelector(
  selectCartFeature,
  (state: CartFeatureState) => state.numberOfItems
);
