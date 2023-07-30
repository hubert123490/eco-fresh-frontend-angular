import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../store/models/ProductDetails';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  getProductDetails(productId: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(
      `http://localhost:8080/products/${productId}`
    );
  }
}
