import { createReducer, on } from '@ngrx/store';
import { CartApiActions } from '../actions/cart.actions';
import { Cart, CartItem } from '../models/Cart';

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
  on(CartApiActions.addItemQuantity, (_state, { request }) => {
    const updatedCartItems: CartItem[] = _state.cartItems.map(item => {
      if (item.productId === request.productId && item.orderRequest.kcalChoice === request.orderRequest.kcalChoice) {
        return {
          ...item,
          orderRequest: {
            ...item.orderRequest,
            mealsAmountChoice: item.orderRequest.mealsAmountChoice + 1
          }
        };
      } else {
        return item;
      }
    });

    return {
      ..._state,
      cartItems: updatedCartItems,
    };
  }),
  on(CartApiActions.reduceItemQuantity, (_state, {request}) => {
    const updatedCartItems: CartItem[] = _state.cartItems.map(item => {
      if (item.productId === request.productId && item.orderRequest.kcalChoice === request.orderRequest.kcalChoice && item.orderRequest.mealsAmountChoice > 0) {
        return {
          ...item,
          orderRequest: {
            ...item.orderRequest,
            mealsAmountChoice: item.orderRequest.mealsAmountChoice - 1
          }
        };
      } else {
        return item;
      }
    });

    return {
      ..._state,
      cartItems: updatedCartItems,
    };
  }),
  on(CartApiActions.loadCart, (_state, { cart }) => {
    return cart;
  })
);