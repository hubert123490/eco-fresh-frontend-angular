import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { ProductDetailsApiActions } from '../actions/product-details.actions';

@Injectable()
export class ProductDetailsEffects {
  loadProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductDetailsApiActions.loadProductDetails),
      switchMap(({ productId }) =>
        this.productDetailsService.getProductDetails(productId).pipe(
          map((productDetails) =>
            ProductDetailsApiActions.loadProductDetailsSuccess({
              productDetails,
            })
          ),
          catchError((err) => {
            throw new err();
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productDetailsService: ProductDetailsService
  ) {}
}
