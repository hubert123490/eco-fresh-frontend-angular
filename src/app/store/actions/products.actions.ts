import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../models/Product';

export const ProductsApiActions = createActionGroup({
  source: 'Products API',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
  },
});
