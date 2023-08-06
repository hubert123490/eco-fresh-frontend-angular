import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/store/models/Cart';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {
  @Input() cartItems : CartItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
