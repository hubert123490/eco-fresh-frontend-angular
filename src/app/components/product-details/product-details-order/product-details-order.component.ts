import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/components/main-page/products/product/Product';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details-order',
  templateUrl: './product-details-order.component.html',
  styleUrls: ['./product-details-order.component.scss']
})
export class ProductDetailsOrderComponent implements OnInit {
  @Input() product : Product | undefined = new Product();
  @Output() addToCartEvent : EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    let confirmed : boolean = confirm("Add to cart?");
    if(confirmed && this.product) this.addToCartEvent.emit(this.product);
  }
}
