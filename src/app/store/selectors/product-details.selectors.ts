import { createFeatureSelector } from '@ngrx/store';
import { ProductDetails } from '../models/ProductDetails';
 
export const selectProductDetails = createFeatureSelector<ProductDetails>('productDetails');
 