import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/components/main-page/products/product/Product';
import { Output, EventEmitter } from '@angular/core';
import { ProductDetails } from 'src/app/store/models/ProductDetails';

@Component({
  selector: 'app-product-details-order',
  templateUrl: './product-details-order.component.html',
  styleUrls: ['./product-details-order.component.scss']
})
export class ProductDetailsOrderComponent implements OnInit {
  @Input() productDetails?: ProductDetails | null;
  @Output() addToCartEvent : EventEmitter<ProductDetails> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
