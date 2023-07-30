import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductDetails } from 'src/app/store/models/ProductDetails';
import { ModalComponent } from '../../shared/modal/modal.component';

import { ProductDetailsOrderComponent } from './product-details-order.component';
import { PricePipe } from 'src/app/shared/pipes/price-pipe.pipe';

describe('ProductDetailsOrderComponent', () => {
  let sut: ProductDetailsOrderComponent;
  let fixture: ComponentFixture<ProductDetailsOrderComponent>;
  let store: MockStore;
  let modal: ModalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [ModalComponent, provideMockStore({})],
      declarations: [ProductDetailsOrderComponent, ModalComponent, PricePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsOrderComponent);
    sut = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    modal = TestBed.inject(ModalComponent);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('creates ProductDetailsOrderComponent', () => {
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
