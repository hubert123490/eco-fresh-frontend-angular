import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductDetails from './ProductDetails';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
   productDetails: ProductDetails | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  // TODO
  this.productDetails = new ProductDetails();
  }

}