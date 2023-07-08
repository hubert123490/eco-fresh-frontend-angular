import { createReducer, on } from '@ngrx/store';
import { OrderApiActions } from '../actions/order.actions';
import { ProductDetailsApiActions } from '../actions/product-details.actions';
import { ProductDetails } from '../models/ProductDetails';

export const productDetailsState: ProductDetails = {
  productId: '',
  productName: '',
  productDescription: '',
  productPrice: 0,
  productCategory: '',
  productCertificate: '',
  productProducer: '',
  productKcal: '0',
  productImages: [],
  orderInput: {
    kcalChoices : [],
    mealsAmount : []
  },
  orderSummary: {
    totalPrice : 0,
    mealAmount : 0,
    mealKcal : 0,
    ingredientsDetails : []
  }
};

export const productDetailsReducer = createReducer(
  productDetailsState,
  on(ProductDetailsApiActions.loadProductDetailsSuccess, (_state, { productDetails }) => (productDetails)),
  on(OrderApiActions.loadOrderSuccess, (_state, { orderSummary }) => {
    const result = {..._state};
    result.orderSummary = orderSummary;
    return result;
  })
);