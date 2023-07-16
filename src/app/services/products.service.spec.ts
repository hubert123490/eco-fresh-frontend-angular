import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { Product } from '../store/models/Product';

describe('ProductsService', () => {
  let sut: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    sut = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('creates ProductsService', () => {
    expect(sut).toBeTruthy();
  });

  it('makes a GET request to retrieve products', async () => {
    // given
    const expectedResult: Product[] = [
      {
        productId: '0',
        productName: 'Chicken Soup',
        productDescription:
          "Everyone has their own favorite chicken soup recipe, but rarely have so few ingredients added up to so much comfort. This version has classic flavors and, thanks to a simplified method, cooks more quickly than traditional chicken soups (the dish is ready in a little over an hour). There's no need to make a separate stock; the vegetables and meat form their own satisfying broth.",
        productPrice: '5000',
        productCategory: 'Soups',
        productCertificate: 'ECO',
        productKcal: '2000',
        productImage: 'assets/main-page/products/chicken__soup.jpg',
      },
    ];

    // when
    sut.getProducts().subscribe((result) => {
      // then
      expect(result).toEqual(expectedResult);
    });

    // then
    const req = httpMock.expectOne('http://localhost:8080/products');
    expect(req.request.method).toBe('GET');

    req.flush(mockedProducts);
  });

  it('makes a GET request to retrieve products with filters', async () => {
    // given
    const filters = {
      productNamePrefix: 'Chicken',
      priceFrom: '1000',
      priceTo: '5000',
      categories: ['Soups', 'Salads'],
      certifications: ['ORG'],
    };

    const expectedResult: Product[] = [
      {
        productId: '0',
        productName: 'Chicken Soup',
        productDescription: '...',
        productPrice: '5000',
        productCategory: 'Soups',
        productCertificate: 'ECO',
        productKcal: '2000',
        productImage: 'assets/main-page/products/chicken__soup.jpg',
      },
    ];

    // when
    sut.getProducts(filters).subscribe((result) => {
      // then
      expect(result).toEqual(expectedResult);
    });

    // then
    const req = httpMock.expectOne((request) => {
      return (
        request.url === 'http://localhost:8080/products' &&
        request.method === 'GET' &&
        request.params.has('productNamePrefix') &&
        request.params.has('priceFrom') &&
        request.params.has('priceTo') &&
        request.params.getAll('categories')!.length === 2 &&
        request.params.getAll('certifications')!.length === 1
      );
    });

    expect(req.request.params.get('productNamePrefix')).toBe(
      filters.productNamePrefix
    );
    expect(req.request.params.get('priceFrom')).toBe(filters.priceFrom);
    expect(req.request.params.get('priceTo')).toBe(filters.priceTo);
    expect(req.request.params.getAll('categories')).toEqual(filters.categories);
    expect(req.request.params.getAll('certifications')).toEqual(
      filters.certifications
    );

    req.flush(expectedResult);
  });
});

const mockedProducts: Product[] = [
  {
    productId: '0',
    productName: 'Chicken Soup',
    productDescription:
      "Everyone has their own favorite chicken soup recipe, but rarely have so few ingredients added up to so much comfort. This version has classic flavors and, thanks to a simplified method, cooks more quickly than traditional chicken soups (the dish is ready in a little over an hour). There's no need to make a separate stock; the vegetables and meat form their own satisfying broth.",
    productPrice: '5000',
    productCategory: 'Soups',
    productCertificate: 'ECO',
    productKcal: '2000',
    productImage: 'assets/main-page/products/chicken__soup.jpg',
  },
];
