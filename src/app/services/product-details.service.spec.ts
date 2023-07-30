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
    sut.getProductDetails('0').subscribe((result) => {
      // then
      expect(result).toEqual(expectedResult);
    });

    // then
    const req = httpMock.expectOne('http://localhost:8080/products/0');
    expect(req.request.method).toBe('GET');

    req.flush(mockedProductDetails);
  });
});

const mockedProductDetails: ProductDetails = {
  productId: '0',
  productName: 'Chicken Soup',
  productDetailedDescription:
    "Everyone has their own favorite chicken soup recipe, but rarely have so few ingredients added up to so much comfort. This version has classic flavors and, thanks to a simplified method, cooks more quickly than traditional chicken soups (the dish is ready in a little over an hour). There's no need to make a separate stock; the vegetables and meat form their own satisfying broth.",
  productPrice: '5000',
  productCategory: 'Soups',
  productCertificate: 'ECO',
  productKcal: '2000',
  productImage: 'assets/main-page/products/chicken__soup.jpg',
  ingredients: {
    chicken: {
      name: 'Chicken wing (300g)',
      value: '2',
    },
    oil: {
      name: 'Avocado oil',
      value: '30g',
    },
    garlic: {
      name: 'Clove of garilc',
      value: '6',
    },
    onion: {
      name: 'Onion',
      value: '1',
    },
    largeCarrot: {
      name: 'Large carrot',
      value: '2',
    },
  },
};

