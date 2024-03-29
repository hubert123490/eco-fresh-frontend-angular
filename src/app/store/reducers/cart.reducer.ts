import { createReducer, on } from '@ngrx/store';
import { CartApiActions } from '../actions/cart.actions';
import { CartItem } from '../models/Cart';

export const cartState: CartItem[] = [];

export const cartReducer = createReducer(
  cartState,
  on(CartApiActions.addItem, (_state, { productId, quantity, name, imageUrl }) => {
    const newState = [..._state];
    const existingCartItem = newState.find(
      (cartItem) => cartItem.id === productId
    );

    if (existingCartItem) {
      existingCartItem!.quantity += quantity;

      return newState;
    }

    return [...newState, { id: productId, quantity, name , imageUrl }];
  }),
  on(CartApiActions.removeItem, (_state, { productId }) =>
    [..._state].filter((cartItem) => cartItem.id !== productId)
  ),
  on(CartApiActions.addItemQuantity, (_state, { productId }) => {
    const newState = [..._state];
    const existingCartItem = [...newState].find(
      (cartItem) => cartItem.id === productId
    );

    if (existingCartItem) {
      const newCartItem = {
        id: existingCartItem.id,
        quantity: (existingCartItem.quantity < 1 ? existingCartItem.quantity : existingCartItem.quantity + 1),
        name: existingCartItem.name,
        imageUrl : existingCartItem.imageUrl
      };

      return [...[...newState.filter((cartItem) => cartItem.id !== productId)], newCartItem];
    }

    return newState;
  }),
  on(CartApiActions.reduceItemQuantity, (_state, { productId }) => {
    const newState = [..._state];
    const existingCartItem = [...newState].find(
      (cartItem) => cartItem.id === productId
    );

    if (existingCartItem) {
      const newCartItem = {
        id: existingCartItem.id,
        quantity: (existingCartItem.quantity > 1 ? existingCartItem.quantity - 1 : existingCartItem.quantity),
        name: existingCartItem.name,
        imageUrl : existingCartItem.imageUrl
      };

      return [...[...newState.filter((cartItem) => cartItem.id !== productId)], newCartItem];
    }

    return newState;
  })
);
