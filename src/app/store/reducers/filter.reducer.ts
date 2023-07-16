import { createReducer, on } from '@ngrx/store';
import { FilterRequest } from '../models/Filter';
import { FilterApiActions } from '../actions/filter.actions';

export const filterState: FilterRequest = {
    productNamePrefix: null,
    categories : null,
    priceFrom : null,
    priceTo : null,
    certifications : null
};

export const filterReducer = createReducer(
  filterState,
  on(FilterApiActions.loadProductsWithFilters, (_state, { filterRequest }) => ({
    ..._state,
    ...filterRequest
  })),
);