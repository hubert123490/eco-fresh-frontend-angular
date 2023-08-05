import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCart,
  selectCartItems,
} from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$ = this.store.select(selectCartItems);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
