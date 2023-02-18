import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/store/models/ProductDetails';

@Component({
  selector: 'app-product-details-summary',
  templateUrl: './product-details-summary.component.html',
  styleUrls: ['./product-details-summary.component.scss']
})
export class ProductDetailsSummaryComponent implements OnInit {
  @Input() productDetails?: ProductDetails | null;

  constructor() { }

  ngOnInit(): void {
  }

}
