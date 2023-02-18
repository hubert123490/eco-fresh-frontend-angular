import { createReducer, on } from '@ngrx/store';
import { ProductDetailsApiActions } from '../actions/product-details.actions';
import { ProductDetails } from '../models/ProductDetails';

export const initialState: ProductDetails | {} = {};

export const productDetailsReducer = createReducer(
  initialState,
  on(ProductDetailsApiActions.loadProductDetailsSuccess, (_state, { productDetails }) => (productDetails))
);