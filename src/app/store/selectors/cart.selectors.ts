import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cart } from '../models/Cart';

export const selectCart = createFeatureSelector<Cart>('cart');

export const selectCartItems = createSelector(
  selectCart,
  (state: Cart) => state.cartItems
);
