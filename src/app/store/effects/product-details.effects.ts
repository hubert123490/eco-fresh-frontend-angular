import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { ProductDetailsApiActions } from '../actions/product-details.actions';

@Injectable()
export class ProductDetailsEffects {
  loadProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductDetailsApiActions.loadProductDetails),
      mergeMap(({ productId }) =>
        this.productDetailsService.getProductDetails(productId).pipe(
          map((productDetails) =>
            ProductDetailsApiActions.loadProductDetailsSuccess({
              productDetails,
            })
          ),
          catchError(() => of())
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productDetailsService: ProductDetailsService
  ) {}
}
