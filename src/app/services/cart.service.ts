import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from '../store/models/Cart';
import { selectCartItems } from '../store/selectors/cart.selectors';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient, private store: Store) {}

  public getCartData(): Observable<Cart> {
    return this.http.get<Cart>('/assets/data/cart.json', {
      params: {
        cartItems: this.getCartItems(),
      },
    });
  }

  private getCartItems() {
    let cartItems: any;
    this.store.select(selectCartItems).subscribe((items) => {
      cartItems = items;
    });
    return cartItems;
  }
}
