import { TestBed } from '@angular/core/testing';
import Product from '../main-page/products/product/Product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    service.items = [];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to the cart', () => {
    const product = new Product();
    service.addToCart(product);
    expect(service.items).toEqual([product]);
  });

  it('should get items from the cart', () => {
    const product1 = new Product();
    const product2 = new Product();
    service.items = [product1, product2];
    const arr = service.getItems();
    const expected = [product1, product2];
    expect(arr).toEqual(expected);
  });

  it('should clear cart', () => {
    const product1 = new Product();
    const product2 = new Product();
    service.items = [product1, product2];
    service.clearCart();
    expect(service.items).toEqual([]);
  });
});
