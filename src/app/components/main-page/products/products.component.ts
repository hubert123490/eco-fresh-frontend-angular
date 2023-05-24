import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/store/models/Product';
import { Store } from '@ngrx/store';
import {
  selectProducts,
  selectProductsLength,
  selectProductsPage,
} from 'src/app/store/selectors/products.selectors';
import { Observable } from 'rxjs';
import { HttpResourceHandlerService } from '../../shared/http-resource/http-resource-handler/http-resource-handler.service';
import { ProductsApiActions } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  currentPage = 1;
  productsLength$: Observable<number> = this.store.select(selectProductsLength);
  pageProducts$: Observable<readonly Product[]> = this.store.select(
    selectProductsPage(this.currentPage)
  );

  constructor(
    private store: Store,
    public httpResourceService: HttpResourceHandlerService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ProductsApiActions.loadProducts());
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.pageProducts$ = this.store.select(
      selectProductsPage(this.currentPage)
    );
  }
}
