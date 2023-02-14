import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Product } from 'src/app/store/models/Product';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let sut: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    store = TestBed.inject(MockStore);
    
    sut = fixture.componentInstance;
    sut.product = mockedProduct;
    fixture.detectChanges();
  });

  it('creates ProductComponent', () => {
    expect(sut).toBeTruthy();
  });
});

const mockedProduct: Product = {
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
};
