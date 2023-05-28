import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsApiActions } from '../actions/products.actions';
 
@Injectable()
export class ProductsEffects {
 
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsApiActions.loadProducts),
      mergeMap(({}) => this.productsService.getProducts()
        .pipe(
          map(products => (ProductsApiActions.loadProductsSuccess({products}))),
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