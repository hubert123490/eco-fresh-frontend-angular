import { HttpClient } from '@angular/common/http';
import { Product, ProductsSize } from '../store/models/Product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http : HttpClient
  ) { }

  getProducts(page : number) : Observable<Array<Product>> {
    return this.http.get<Product[]>('/assets/data/products.json', {params: {page : page}});
  }

  getProductsSize() : Observable<ProductsSize> {
    return this.http.get<ProductsSize>('/assets/data/products-size.json');
  }
}
