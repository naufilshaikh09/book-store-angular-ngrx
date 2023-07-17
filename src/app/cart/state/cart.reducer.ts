import { createReducer, on } from '@ngrx/store';
import { CartFeatureState } from "./cart.selector";
import { CartItem } from "../model/cart-item.model";
import { CatalogPageActions } from 'src/app/catalog/state/actions/catalog-page.actions';
import { CartPageActions } from './actions/cart-page.actions';

export const initialState: CartFeatureState = {
  cartItems: [],
  numberOfItems: 0
};

const getNumberOfItems = (cartItems: CartItem[]): number => {
  return cartItems.reduce((partialSum, cartItem) => partialSum + cartItem.numberOfItems, 0);
}

export const cartReducer = createReducer<CartFeatureState>(
  initialState,
  on(CatalogPageActions.addItemToCart, (store: CartFeatureState, result): CartFeatureState => {
    const existingItem = store.cartItems.find(({ id }) => id === result.item.id);

    return {
      ...store,
      cartItems: store.cartItems.map((cartItem) => cartItem.item.id !== result.item.id
        ? cartItem
        : { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
      ).concat(existingItem ? [] : [{ id: result.item.id, numberOfItems: 1, item: result.item }]),
      numberOfItems: store.numberOfItems + 1
    }
  }
  ),
  on(CartPageActions.reduceNumberOfItemInCart, (store: CartFeatureState, result): CartFeatureState => {
    return {
      ...store,
      cartItems: store.cartItems.map((cartItem) => cartItem.id !== result.cartItem.id
        ? cartItem
        : { ...cartItem, numberOfItems: cartItem.numberOfItems - 1 }
      ).filter(({ numberOfItems }) => numberOfItems > 0),
      numberOfItems: store.numberOfItems - 1
    }
  }),
  on(CartPageActions.increaseNumberOfItemInCart, (store: CartFeatureState, result): CartFeatureState => {
    return {
      ...store,
      cartItems: store.cartItems.map((cartItem) => cartItem.id !== result.cartItem.id
        ? cartItem
        : { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
      ).filter(({ numberOfItems }) => numberOfItems > 0),
      numberOfItems: store.numberOfItems + 1
    }
  }),
  on(CartPageActions.removeItemFromCart, (store: CartFeatureState, result): CartFeatureState => {
    const cartItems = [...store.cartItems.filter(item => item.id !== result.cartItem.id)];
    return {
      cartItems,
      numberOfItems: getNumberOfItems(cartItems)
    }
  }),
);
