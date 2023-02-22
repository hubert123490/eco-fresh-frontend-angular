import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsApiActions } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 9;
  
  pages: number[] = []

  constructor(private store : Store) {
    this.store.dispatch(ProductsApiActions.loadProductList({page : 0}))
  }

  ngOnInit() : void {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
  }
  
  range(start: number, end: number) : number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

  changePage(page : number) {
    this.currentPage = page;
    this.store.dispatch(ProductsApiActions.loadProductList({page : page}))
  }
}
