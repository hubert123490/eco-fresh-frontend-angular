import { createFeatureSelector } from '@ngrx/store';
import { Product, ProductsSize } from '../models/Product';
 
export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
export const selectProductsSize = createFeatureSelector<Readonly<ProductsSize>>('productsSize');