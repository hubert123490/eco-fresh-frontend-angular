import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { CartApiActions } from '../actions/cart.actions';
import { Cart } from '../models/Cart';

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartApiActions.addItem, CartApiActions.removeItem, CartApiActions.addItemQuantity, CartApiActions.reduceItemQuantity),
      mergeMap(() =>
        this.cartService.getCartData().pipe(
          map((cart: Cart) => CartApiActions.loadCart({ cart })),
          catchError(() => of())
        )
      )
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
