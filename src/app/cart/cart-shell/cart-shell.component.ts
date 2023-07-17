import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item.model';
import { Store } from '@ngrx/store';
import { CartFeatureState, selectCartItems, selectCartTotalPrice } from '../state/cart.selector';
import { State } from '../state';
import { CartPageActions } from '../state/actions/cart-page.actions';

@Component({
  selector: 'app-cart-shell',
  templateUrl: './cart-shell.component.html',
  styleUrls: ['./cart-shell.component.css']
})
export class CartShellComponent {
  cartItems$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;

  @Input()
  cartItem: CartItem | undefined;

  id = "id";

  constructor(private store: Store<State>) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectCartTotalPrice);
  }

  reduceItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.reduceNumberOfItemInCart({ cartItem }));
  }

  removeItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.removeItemFromCart({ cartItem }));
  }

  increaseItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.increaseNumberOfItemInCart({ cartItem }));
  }
}
