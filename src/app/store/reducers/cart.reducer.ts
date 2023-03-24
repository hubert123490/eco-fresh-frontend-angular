import { createReducer, on } from '@ngrx/store';
import { CartApiActions } from '../actions/cart.actions';
import { Cart } from '../models/Cart';

export const cartState: Cart = {
  cartItems: [],
  cartSummary: {
    totalPrice: 0,
    subTotal: 0,
    shipping: 0,
    tax: 0,
  },
};

export const cartReducer = createReducer(
  cartState,
  on(CartApiActions.addItem, (_state, { request} ) => {
    let result: Cart = { ..._state };
    const existingProductIndex = result.cartItems.findIndex(item => item.productId === request.productId && item.orderRequest.kcalChoice === request.orderRequest.kcalChoice);

    if (existingProductIndex !== -1) {
      const existingProduct = result.cartItems[existingProductIndex];
      const updatedOrderRequest = { ...existingProduct.orderRequest, mealsAmountChoice: +existingProduct.orderRequest.mealsAmountChoice + +request.orderRequest.mealsAmountChoice };
      const updatedProduct = { ...existingProduct, orderRequest: updatedOrderRequest };
      result.cartItems = [...result.cartItems.slice(0, existingProductIndex), updatedProduct, ...result.cartItems.slice(existingProductIndex + 1)];
    } else {
      result.cartItems = [...result.cartItems, request];
    }
      
    return result;
  }),
  on(CartApiActions.removeItem, (_state, { request} ) => {
    let result : Cart = {..._state};

    result.cartItems = result.cartItems
      .filter(item => (item.productId !== request.productId && item.orderRequest.kcalChoice !== request.orderRequest.kcalChoice))

    return result;
  }),
  on(CartApiActions.addItemQuantity, (_state, {request}) => {
    let result : Cart = {..._state};

    const product = result.cartItems.find(item => item.productId === request.productId && item.orderRequest.kcalChoice === request.orderRequest.kcalChoice)
    if(product) product.orderRequest.mealsAmountChoice += 1;

    return result;
  }),
  on(CartApiActions.reduceItemQuantity, (_state, {request}) => {
    let result : Cart = {..._state};

    const product = result.cartItems.find(item => item.productId === request.productId && item.orderRequest.kcalChoice === request.orderRequest.kcalChoice)
    if(product) product.orderRequest.mealsAmountChoice = product.orderRequest.mealsAmountChoice > 1 ? product.orderRequest.mealsAmountChoice - 1 : 1;

    return result;
  }),
  on(CartApiActions.loadCart, (_state, { cart }) => {
    return cart;
  })
);
