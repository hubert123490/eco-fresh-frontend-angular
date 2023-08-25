import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResponsiveFilter, Filter } from '../search-nav';
import { Store } from '@ngrx/store';
import { FilterApiActions } from 'src/app/store/actions/filter.actions';

@Component({
  selector: 'app-top-search-nav',
  templateUrl: './top-search-nav.component.html',
  styleUrls: ['./top-search-nav.component.scss'],
})
export class TopSearchNavComponent {
  @Input() responsiveFilter?: ResponsiveFilter;
  @Output() toggleFilter = new EventEmitter();
  filter: Filter = new Filter();
  categories: string[];

  productNamePrefix : string | null = null;

  constructor(private store : Store) {
    this.categories = ['meat', 'fruits', 'vegetables', 'crops', 'others'];
  }

  onSubmit() {
    this.store.dispatch(FilterApiActions.loadProductsWithFilters({
      filterRequest: {
        productNamePrefix: this.productNamePrefix
      }
    }))
  }
}
