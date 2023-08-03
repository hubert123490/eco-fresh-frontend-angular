import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem } from '../models/Cart';

export const selectCart = createFeatureSelector<CartItem[]>('cart');

export const selectCartItems = createSelector(
  selectCart,
  (state: CartItem[]) => state
);
