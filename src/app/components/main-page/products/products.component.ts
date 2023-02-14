import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/store/models/Product';
import { Store } from '@ngrx/store';
import { selectProducts } from 'src/app/store/selectors/products.selectors';
import { ProductsApiActions } from 'src/app/store/actions/products.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ : Observable<readonly Product[]> = this.store.select(selectProducts);

  constructor(private store : Store) {
  }

  ngOnInit(): void {
      this.store.dispatch(ProductsApiActions.loadProductList())
  }
}
