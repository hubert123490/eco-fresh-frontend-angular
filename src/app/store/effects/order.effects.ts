import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OrderService } from 'src/app/services/order.service';
import { OrderApiActions } from '../actions/order.actions';

@Injectable()
export class OrderEffects {
  loadOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderApiActions.loadOrder),
      mergeMap(({ productId, orderRequest }) =>
        this.orderService.getOrderSummary(productId, orderRequest).pipe(
          map((orderSummary) =>
            OrderApiActions.loadOrderSuccess({
                orderSummary
            })
          ),
          catchError(() => of())
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}
}
