import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/store/models/ProductDetails';

@Component({
  selector: 'app-product-details-info',
  templateUrl: './product-details-info.component.html',
  styleUrls: ['./product-details-info.component.scss'],
})
export class ProductDetailsInfoComponent implements OnInit {
  @Input() productDetails?: ProductDetails | null;

  constructor() {}

  ngOnInit(): void {}
}
