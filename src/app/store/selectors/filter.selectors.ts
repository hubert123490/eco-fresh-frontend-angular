import { createFeatureSelector } from '@ngrx/store';
import { FilterRequest } from '../models/Filter';

export const selectFilters = createFeatureSelector<FilterRequest>('filter');
