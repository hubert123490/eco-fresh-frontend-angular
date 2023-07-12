import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductDetails } from '../store/models/ProductDetails';

import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsService', () => {
  let sut: ProductDetailsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductDetailsService],
    });
    sut = TestBed.inject(ProductDetailsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('creates ProductDetailsService', () => {
    expect(sut).toBeTruthy();
  });

  it('makes a GET request to retrieve data', async () => {
    // given
    const expectedResult: ProductDetails = mockedProductDetails;

    // when
    sut.getProductDetails('1').subscribe((result) => {
      // then
      expect(result).toEqual(expectedResult);
    });

    // then
    const req = httpMock.expectOne('/assets/data/product-details.json?productId=1');
    expect(req.request.method).toBe('GET');

    req.flush(mockedProductDetails);
  });
});

const mockedProductDetails: ProductDetails = {
  productId: '0',
  productName: 'Chicken Soup',
  productDescription:
    "Everyone has their own favorite chicken soup recipe, but rarely have so few ingredients added up to so much comfort. This version has classic flavors and, thanks to a simplified method, cooks more quickly than traditional chicken soups (the dish is ready in a little over an hour). There's no need to make a separate stock; the vegetables and meat form their own satisfying broth.",
  productPrice: 50.0,
  productCategory: 'Soups',
  productCertificate: 'ECO',
  productProducer: 'Blods',
  productKcal: '2000',
  productImages: [
    {
      url: 'assets/main-page/products/chicken__soup.jpg',
    },
  ],
  orderInput: {
    kcalChoices: ['2000 (small)', '2500 (medium)', '3000 (large)'],
    mealsAmount: [1, 2, 3, 4],
  },
  orderSummary: {
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
  },
};
