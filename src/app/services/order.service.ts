import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderRequest } from '../store/models/Order';
import { OrderSummary } from '../store/models/ProductDetails';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrderSummary(productId : string, orderRequest: OrderRequest): Observable<OrderSummary> {
    return this.http.get<OrderSummary>('/assets/data/order.json', {
      params: {
        productId: productId,
        kcalChoice: orderRequest.kcalChoice,
        mealsAmountChoice: orderRequest.mealsAmountChoice,
      },
    });
  }
}
