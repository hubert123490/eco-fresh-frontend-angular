import { createActionGroup, props } from '@ngrx/store';
import { Cart, CartItemAddRequest, CartItemQuantityChangeRequest, CartItemRemoveRequest } from '../models/Cart';

export const CartApiActions = createActionGroup({
  source: 'Order API',
  events: {
    'Add Item': props<{request : CartItemAddRequest}>(),
    'Remove Item' : props<{request : CartItemRemoveRequest}>(),
    'Add Item Quantity' : props<{request : CartItemQuantityChangeRequest}>(),
    'Reduce Item Quantity' : props<{request : CartItemQuantityChangeRequest}>(),
    'Load Cart' : props<{cart : Cart}>(),
  },
});
