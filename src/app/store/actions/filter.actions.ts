import { createActionGroup, props } from '@ngrx/store';
import { FilterRequest } from '../models/Filter';
import { Product } from '../models/Product';

export const FilterApiActions = createActionGroup({
  source: 'Filter API',
  events: {
    'Load Products with filters': props<{ filterRequest: FilterRequest }>(),
    'Load Products with filters Success': props<{ products: Product[] }>(),
    'Load Products with filters Failure': props<{ message: unknown }>(),
  },
});
