import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/components/main-page/products/product/Product';

@Component({
  selector: 'app-product-details-info',
  templateUrl: './product-details-info.component.html',
  styleUrls: ['./product-details-info.component.scss'],
})
export class ProductDetailsInfoComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() {
    this.product = new Product();
  }

  ngOnInit(): void {}

  getFirstKcalRange(): string {
    let first =  this.product?.productKcal != undefined ? this.product.productKcal[0] : 0;
    return first.toString();
  }

  getSecondKcalRange(): string {
    let second =  this.product?.productKcal != undefined ? this.product.productKcal[1] : 0;
    return second.toString();
  }
}
