import { Component, OnInit } from '@angular/core';
import { Product, ProductsSize } from 'src/app/store/models/Product';
import { Store } from '@ngrx/store';
import {
  selectProducts,
  selectProductsSize,
} from 'src/app/store/selectors/products.selectors';
import { Observable } from 'rxjs';
import { PaginationApiActions } from 'src/app/store/actions/pagination.actions';
import { HttpResourceHandlerService } from '../../shared/http-resource/http-resource-handler/http-resource-handler.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<readonly Product[]> = this.store.select(selectProducts);
  productsSize$: Observable<ProductsSize> =
    this.store.select(selectProductsSize);

  constructor(
    private store: Store,
    public httpResourceService: HttpResourceHandlerService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(PaginationApiActions.loadProductsSize());
  }
}
