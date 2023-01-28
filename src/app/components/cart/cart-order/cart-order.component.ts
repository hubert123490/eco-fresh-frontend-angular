import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.scss']
})
export class CartOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitOrder() : void {
    alert("You submitted order!")
  }
}
