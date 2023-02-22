import { createReducer, on } from '@ngrx/store';
import { PaginationApiActions } from '../actions/pagination.actions';
import { ProductsSize } from '../models/Product';

export const initialState: ProductsSize = {productsSize : 0};

export const paginationReducer = createReducer(
  initialState,
  on(PaginationApiActions.loadProductsSizeSuccess, (_state, { productsSize }) => (productsSize))
);