import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OrderRequest } from '../store/models/Order';
import { OrderSummary } from '../store/models/ProductDetails';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let sut: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService],
    });
    sut = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('creates OrderService', () => {
    expect(sut).toBeTruthy();
  });

  it('makes a GET request to retrieve order summary', async () => {
    // given
    const expectedResult: OrderSummary = mockedOrderSummary;
    const orderRequest : OrderRequest = {
      kcalChoice : "2000 (small)",
      mealsAmountChoice : 1
    }

    // when
    sut.getOrderSummary(orderRequest).subscribe((result) => {
      // then
      expect(result).toEqual(expectedResult);
    });

    // then
    const req = httpMock.expectOne(
      '/assets/data/order.json?kcalChoice=2000%20(small)&mealsAmountChoice=1'
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockedOrderSummary);
  });
});

const mockedOrderSummary: OrderSummary = {
  totalPrice: 50.99,
  mealAmount: 1,
  mealKcal: 2000,
  ingredientsDetails: [
    {
      ingredientName: 'Chicken wing (300g)',
      ingredientAmount: '2',
    },
    {
      ingredientName: 'Avocado oil',
      ingredientAmount: '30g',
    },
    {
      ingredientName: 'Clove of garilc',
      ingredientAmount: '6',
    },
    {
      ingredientName: 'Onion',
      ingredientAmount: '1',
    },
    {
      ingredientName: 'Large carrot',
      ingredientAmount: '2',
    },
  ],
};
