import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CartApiActions } from 'src/app/store/actions/cart.actions';
import { OrderApiActions } from 'src/app/store/actions/order.actions';
import { ProductDetails } from 'src/app/store/models/ProductDetails';
import { ModalComponent } from '../../shared/modal/modal.component';

import { ProductDetailsOrderComponent } from './product-details-order.component';

describe('ProductDetailsOrderComponent', () => {
  let sut: ProductDetailsOrderComponent;
  let fixture: ComponentFixture<ProductDetailsOrderComponent>;
  let store: MockStore;
  let modal: ModalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [ModalComponent, provideMockStore({})],
      declarations: [ProductDetailsOrderComponent, ModalComponent],
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

  it('dispatches loadOrder action when kcalChoice and selectedMealAmount are truthy', () => {
    // given
    const productDetails: ProductDetails = mockedProductDetails;
    sut.productDetails = productDetails;
    sut.kcalChoice = '2000';
    sut.selectedMealAmount = 3;

    // when
    sut.onOptionsChange();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(
      OrderApiActions.loadOrder({
        productId: '0',
        orderRequest: {
          kcalChoice: '2000',
          mealsAmountChoice: 3,
        },
      })
    );
  });

  it('dispatches loadOrder action when kcalChoice or selectedMealAmount are falsy', () => {
    // given
    const productDetails: ProductDetails = mockedProductDetails;
    sut.productDetails = productDetails;
    sut.kcalChoice = '';
    sut.selectedMealAmount = 0;

    // when
    sut.onOptionsChange();

    // then
    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('dispatches an action when modalHandler is called', () => {
    // given
    const productDetails: ProductDetails = mockedProductDetails;
    sut.productDetails = productDetails;
    sut.kcalChoice = '2000';
    sut.selectedMealAmount = 2;
    const expectedAction = CartApiActions.addItem({
      request: {
        productId: sut.productDetails.productId,
        orderRequest: {
          kcalChoice: sut.kcalChoice,
          mealsAmountChoice: sut.selectedMealAmount,
        },
      },
    });

    // when
    sut.openModal();
    // click modal's yes button
    fixture.debugElement
      .query(By.css('.modal--options__confirm'))
      .nativeElement.click();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
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
  productImages: [{ url: 'assets/main-page/products/chicken__soup.jpg' }],
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
