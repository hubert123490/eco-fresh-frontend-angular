import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { CartApiActions } from 'src/app/store/actions/cart.actions';
import { cartState } from 'src/app/store/reducers/cart.reducer';

import { CartProductComponent } from './cart-product.component';

describe('CartProductComponent', () => {
  let sut: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;
  let store: MockStore;
  let initialState = { cart: { ...cartState } };
  let modal : ModalComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [provideMockStore({ initialState }), ModalComponent],
      declarations: [CartProductComponent, ModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CartProductComponent);
    sut = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    modal = TestBed.inject(ModalComponent);
    spyOn(store, 'dispatch').and.callThrough();
    sut.cartItem = cartItemMock;
    fixture.detectChanges();
  });

  it('creates CartProduct', () => {
    expect(sut).toBeTruthy();
  });

  it('dispatches increaseCartItemQuantity action when "+" is clicked', () => {
    // given
    const expectedActionParams = {
      request: {
        productId: sut.cartItem!.productId,
        orderRequest: sut.cartItem!.orderRequest,
      },
    }

    // when
    fixture.debugElement.query(By.css("#increase")).nativeElement.click();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(
      CartApiActions.addItemQuantity(expectedActionParams)
    );
  });

  it('dispatches reduceCartItemQuantity action when "-" is clicked', () => {
    // given
    const expectedActionParams = {
      request: {
        productId: sut.cartItem!.productId,
        orderRequest: sut.cartItem!.orderRequest,
      },
    }

    // when
    fixture.debugElement.query(By.css("#reduce")).nativeElement.click();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(
      CartApiActions.reduceItemQuantity(expectedActionParams)
    );
  });

  it('dispatches removeCartItem action when modal query confirmed', () => {
    // given
    const expectedActionParams = {
      request: {
        productId: sut.cartItem!.productId,
        orderRequest: sut.cartItem!.orderRequest,
      },
    }
    const expectedAction = CartApiActions.removeItem(expectedActionParams);

    // when
    sut.openModal();
    // click modal's yes button
    fixture.debugElement.query(By.css(".modal--options__confirm")).nativeElement.click();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});

const cartItemMock = {
  productId: '0',
  orderRequest: {
    kcalChoice: '2000',
    mealsAmountChoice: 3,
  },
  productPrice: 32.23,
  productImage: 'assets/main-page/products/chicken__soup.jpg',
};
