import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../models/Product';

export const selectProducts =
  createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectProductsPage = (page: number) =>
  createSelector(selectProducts, (state: ReadonlyArray<Product>) => {
    return state.slice((page - 1) * 6, page * 6);
  });

export const selectProductsLength = createSelector(selectProducts, (state: ReadonlyArray<Product>) => state.length)
