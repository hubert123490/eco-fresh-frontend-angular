import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/main-page/products/product/Product';

@Component({
  selector: 'app-product-details-order',
  templateUrl: './product-details-order.component.html',
  styleUrls: ['./product-details-order.component.scss']
})
export class ProductDetailsOrderComponent implements OnInit {
  @Input() product : Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

}
