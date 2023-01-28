import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductDetails from './ProductDetails';
import { CartService } from '../../services/cart.service';
import { productsDetails } from './ProductsDetails';
import Product from '../main-page/products/product/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: ProductDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productDetails = productsDetails.find(
      (product) => product.productId === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(product);
    window.alert('Your product has been added to the cart!');
    console.log(this.cartService.items);
  }
}
