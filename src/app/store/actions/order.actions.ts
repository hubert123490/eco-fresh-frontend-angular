import { createActionGroup, props } from '@ngrx/store';
import { OrderRequest } from '../models/Order';
import { OrderSummary } from '../models/ProductDetails';

export const OrderApiActions = createActionGroup({
  source: 'Order API',
  events: {
    'Load Order': props<{
      productId : string,
      orderRequest: OrderRequest;
    }>(),
    'Load Order Success': props<{ orderSummary : OrderSummary}>(),
  },
});
