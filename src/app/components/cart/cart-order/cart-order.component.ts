import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { CartItem } from 'src/app/store/models/Cart';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.scss']
})
export class CartOrderComponent {
  @Input() cartItems : CartItem[] = [];
  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      checkoutProducts : this.cartItems,
      cancelUrl: `${environment.cancelUrl}`,
      successUrl: `${environment.okUrl}`,
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe!.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }
}
