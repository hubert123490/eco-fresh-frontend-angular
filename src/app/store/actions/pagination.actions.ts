import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ProductsSize } from '../models/Product';

export const PaginationApiActions = createActionGroup({
  source: 'Pagination API',
  events: {
    'Load Products Size': emptyProps(),
    'Load Products Size Success': props<{
      productsSize: ProductsSize;
    }>(),
  },
});
