import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductDetailsApiActions } from 'src/app/store/actions/product-details.actions';
import { ProductDetails } from 'src/app/store/models/ProductDetails';
import { selectProductDetails } from 'src/app/store/selectors/product-details.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails$: Observable<ProductDetails> =
    this.store.select(selectProductDetails);

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    // first get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productId'));
    this.store.dispatch(
      ProductDetailsApiActions.loadProductDetails({
        productId: productIdFromRoute,
      })
    );
  }
}
