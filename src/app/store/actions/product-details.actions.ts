import { createActionGroup, props } from '@ngrx/store';
import { ProductDetails } from '../models/ProductDetails';

export const ProductDetailsApiActions = createActionGroup({
  source: 'Product Details API',
  events: {
    'Load Product Details': props<{ productId: string }>(),
    'Load Product Details Success': props<{
      productDetails: ProductDetails | {};
    }>(),
  },
});
