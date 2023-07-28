import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsInfoComponent } from './product-details-info.component';
import { PricePipe } from 'src/app/shared/pipes/price-pipe.pipe';
import { ProductDetails } from 'src/app/store/models/ProductDetails';

describe('ProductDetailsInfoComponent', () => {
  let sut: ProductDetailsInfoComponent;
  let fixture: ComponentFixture<ProductDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsInfoComponent, PricePipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsInfoComponent);
    sut = fixture.componentInstance;
    sut.productDetails = mockedProductDetails
    fixture.detectChanges()
  });

  it('creates ProductDetailsInfoComponent', () => {
    expect(sut).toBeTruthy();
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