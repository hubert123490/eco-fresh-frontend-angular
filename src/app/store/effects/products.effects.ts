import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  withLatestFrom,
  switchMap,
} from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsApiActions } from '../actions/products.actions';
import { Store, select } from '@ngrx/store';
import { selectFilters } from '../selectors/filter.selectors';
import { FilterApiActions } from '../actions/filter.actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ProductsApiActions.loadProducts,
        FilterApiActions.loadProductsWithFilters
      ),
      withLatestFrom(this.store.pipe(select(selectFilters))),
      switchMap(([action, filterState]) =>
        this.productsService.getProducts(filterState).pipe(
          map((products) =>
            ProductsApiActions.loadProductsSuccess({ products })
          ),
          catchError((err) => {
            throw new err();
          })
        )
      )
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
