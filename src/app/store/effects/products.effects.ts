import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { PaginationApiActions } from '../actions/pagination.actions';
import { ProductsApiActions } from '../actions/products.actions';
 
@Injectable()
export class ProductsEffects {
 
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsApiActions.loadProductList),
      mergeMap(({page}) => this.productsService.getProducts(page)
        .pipe(
          map(products => (ProductsApiActions.loadProductListSuccess({products}))),
          catchError(() => of())
        )
      )
    )
  );

  loadProductsSize$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaginationApiActions.loadProductsSize),
      mergeMap(() => this.productsService.getProductsSize()
        .pipe(
          map(productsSize => (PaginationApiActions.loadProductsSizeSuccess({productsSize}))),
          catchError(() => of())
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}