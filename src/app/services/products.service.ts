import { HttpClient } from '@angular/common/http';
import { Product } from '../store/models/Product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http : HttpClient
  ) { }

  getProducts() : Observable<Array<Product>> {
    return this.http.get<Product[]>('/assets/data/products.json');
  }
}
