import { createSelector } from "@ngrx/store";
import { CartItem } from "../model/cart-item.model";
import { State } from ".";

export interface CartFeatureState {
  cartItems: CartItem[],
  numberOfItems: number
}

export const selectCartState = (state: State) => state;

export const selectCartItems = createSelector(
  selectCartState,
  (state: any | undefined) => {
    return state?.cartFeature?.cartItems;
  }
)

export const selectCartTotalPrice = createSelector(
  selectCartState,
  (state: any | undefined) => {
    return state?.cartFeature?.cartItems.reduce((accumulator: number, cartItem: CartItem) => {
      return accumulator + (cartItem.numberOfItems * cartItem.item.price);
    }, 0);
  }
);
