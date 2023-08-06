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

});
