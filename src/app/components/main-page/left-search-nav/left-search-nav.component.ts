import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterApiActions } from 'src/app/store/actions/filter.actions';

@Component({
  selector: 'app-left-search-nav',
  templateUrl: './left-search-nav.component.html',
  styleUrls: ['./left-search-nav.component.scss'],
})
export class LeftSearchNavComponent {
  categories: string[];
  minPrice : number;
  maxPrice : number;
  certifications: string[];
  
  selectedCategory: string | null;
  selectedCertification : string | null;
  selectedPriceFrom: number | null;
  selectedPriceTo: number | null;

  constructor(private store : Store) {
    this.categories = ['soup', 'fruits', 'vegetables'];
    this.minPrice = 0;
    this.maxPrice = 200;
    this.certifications = ['bold', 'MAKO', 'OLF'];

    this.selectedCategory = this.categories[0];
    this.selectedCertification = this.certifications[0];
    this.selectedPriceFrom = this.minPrice
    this.selectedPriceTo = this.maxPrice
  }

  onSubmit() {
    this.store.dispatch(FilterApiActions.loadProductsWithFilters({
      filterRequest: {
        categories: this.selectedCategory ? [this.selectedCategory] : null,
        certifications: this.selectedCertification ? [this.selectedCertification] : null,
        priceFrom : this.selectedPriceFrom ? (this.selectedPriceFrom * 100).toString() : null,
        priceTo : this.selectedPriceTo ? (this.selectedPriceTo * 100).toString() : null
      }
    }))
  }

  onCurrMinChange(value: number): void {
    this.selectedPriceFrom = value
  }
  
  onCurrMaxChange(value: number): void {
    this.selectedPriceTo = value
  }
}
