import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../models/Product';

export const ProductsApiActions = createActionGroup({
  source: 'Products API',
  events: {
    'Load Product List': emptyProps(),
    'Load Product List Success': props<{ products: Array<Product> }>(),
  },
});
