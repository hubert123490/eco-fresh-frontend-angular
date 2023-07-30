import { createReducer, on } from '@ngrx/store';
import { ProductDetailsApiActions } from '../actions/product-details.actions';
import { ProductDetails } from '../models/ProductDetails';

export const productDetailsState: ProductDetails = {
  productId: '',
  productName: '',
  productDetailedDescription: '',
  productPrice: '',
  productCategory: '',
  productCertificate: '',
  productKcal: '',
  productImage: '',
  ingredients: {},
};

export const productDetailsReducer = createReducer(
  productDetailsState,
  on(
    ProductDetailsApiActions.loadProductDetailsSuccess,
    (_state, { productDetails }) => productDetails
  )
);
