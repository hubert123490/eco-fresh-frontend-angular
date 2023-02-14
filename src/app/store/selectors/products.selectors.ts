import { createFeatureSelector } from '@ngrx/store';
import { Product } from '../models/Product';
 
export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
 