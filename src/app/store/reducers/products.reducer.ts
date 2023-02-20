import { createReducer, on } from '@ngrx/store';
import { ProductsApiActions } from '../actions/products.actions';
import { Product } from '../models/Product';

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(ProductsApiActions.loadProductListSuccess, (_state, { products }) => (products)),
);