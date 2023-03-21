import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/store/models/Cart';
import { selectCart } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<Cart> =
    this.store.select(selectCart);

  constructor(private store : Store) { }

  ngOnInit(): void {
  }
}
