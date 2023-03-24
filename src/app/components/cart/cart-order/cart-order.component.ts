import { Component, Input, OnInit } from '@angular/core';
import { CartSummary } from 'src/app/store/models/Cart';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.scss']
})
export class CartOrderComponent implements OnInit {
  @Input() cartSummary : CartSummary | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
