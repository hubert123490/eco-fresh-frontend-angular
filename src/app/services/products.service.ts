import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../store/models/Product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterRequest } from '../store/models/Filter';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(filters?: FilterRequest): Observable<Product[]> {
    if (filters) {
      const params = this.getFiltersHttpParams(filters);
      return this.http.get<Product[]>('http://localhost:8080/products', {
        params: params,
      });
    }
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  private getFiltersHttpParams(filters: FilterRequest) {
    let params = new HttpParams();

    if(filters.productNamePrefix) params = params.set('productNamePrefix', filters.productNamePrefix);
    if(filters.priceFrom) params = params.set('priceFrom', filters.priceFrom);
    if(filters.priceTo) params = params.set('priceTo', filters.priceTo);
    if(filters.categories) filters.categories.forEach((category) => {
      params = params.append('categories', category);
    });
    if(filters.certifications) filters.certifications.forEach((certification) => {
      params = params.append('certifications', certification);
    });

    return params;
  }
}
