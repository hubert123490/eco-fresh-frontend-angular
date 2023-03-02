import { createReducer, on } from '@ngrx/store';
import { PaginationApiActions } from '../actions/pagination.actions';
import { ProductsSize } from '../models/Product';

export const paginationState: ProductsSize = {productsSize : 0};

export const paginationReducer = createReducer(
  paginationState,
  on(PaginationApiActions.loadProductsSizeSuccess, (_state, { productsSize }) => (productsSize))
);