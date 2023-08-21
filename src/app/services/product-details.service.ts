import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../store/models/ProductDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  getProductDetails(productId: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(
      `${environment.serverUrl}/products/${productId}`
    );
  }
}
