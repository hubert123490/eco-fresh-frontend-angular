import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Cart } from '../store/models/Cart';
import { cartState } from '../store/reducers/cart.reducer';

import { CartService } from './cart.service';

describe('CartService', () => {
  let sut: CartService;
  let httpMock: HttpTestingController;
  let store: MockStore;
  let initialState = { cart: { ...cartState } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService, provideMockStore({ initialState })],
    });
    sut = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('creates CartService', () => {
    expect(sut).toBeTruthy();
  });

  it('makes a GET request to retrieve cart items', async () => {
    // given
    const expectedResult: Cart = mockedCart;

    // when
    sut.getCartData().subscribe((result) => {
      // then
      expect(result).toEqual(expectedResult);
    });

     // then
     const req = httpMock.expectOne(
      '/assets/data/cart.json'
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockedCart);
  });
});

const mockedCart: Cart = {
  cartItems: [
    {
      productId: "0",
      orderRequest: {
        kcalChoice: '2000',
        mealsAmountChoice: 3,
      },
      productPrice: 32.23,
      productImage: 'assets/main-page/products/chicken__soup.jpg'
    },
  ],
  cartSummary: {
    totalPrice: 20.99,
    subTotal: 5,
    shipping: 5,
    tax: 10,
  },
};
