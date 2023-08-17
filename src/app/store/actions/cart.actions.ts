import { createActionGroup, props } from '@ngrx/store';

export const CartApiActions = createActionGroup({
  source: 'Order API',
  events: {
    'Add Item': props<{productId : string, quantity: number, name : string, imageUrl : string}>(),
    'Remove Item' : props<{productId : string}>(),
    'Add Item Quantity' : props<{productId: string}>(),
    'Reduce Item Quantity' : props<{productId : string}>(),
  },
});
