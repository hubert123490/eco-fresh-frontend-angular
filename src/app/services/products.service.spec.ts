import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { Product } from '../store/models/Product';

describe('ProductsService', () => {
  let sut: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
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
    const expectedResult : Product[] = mockedProducts

    // when
    sut.getProducts().subscribe(result => {
      // then
      expect(result).toEqual(expectedResult);
    })
    
    // then
    const req = httpMock.expectOne('/assets/data/products.json');
    expect(req.request.method).toBe('GET');
    
    req.flush(mockedProducts);
  });
});

const mockedProducts: Product[] = [{
  productId: '0',
  productName: 'Chicken Soup',
  productDescription:
    "Everyone has their own favorite chicken soup recipe, but rarely have so few ingredients added up to so much comfort. This version has classic flavors and, thanks to a simplified method, cooks more quickly than traditional chicken soups (the dish is ready in a little over an hour). There's no need to make a separate stock; the vegetables and meat form their own satisfying broth.",
  productPrice: 50.0,
  productCategory: 'Soups',
  productCertificate: 'ECO',
  productProducer: 'Blods',
  productKcal: {
    minKcal: 2000,
    maxKcal: 3000,
  },
  productImage: {
    src: 'assets/main-page/products/chicken__soup.jpg',
    alt: 'chicken soup',
  },
}];