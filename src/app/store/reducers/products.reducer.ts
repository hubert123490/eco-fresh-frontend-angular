import { createReducer, on } from '@ngrx/store';
import { ProductsApiActions } from '../actions/products.actions';
import { Product } from '../models/Product';

export const productsState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  productsState,
  on(ProductsApiActions.loadProductsSuccess, (_state, { products }) => (products)),
);