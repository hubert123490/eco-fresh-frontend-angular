import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cartState } from 'src/app/store/reducers/cart.reducer';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let sut: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store : MockStore;
  let initialState = {cart : {...cartState}}
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [provideMockStore({initialState})],
      declarations: [ CartComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    sut = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('creates CartComponent', () => {
    expect(sut).toBeTruthy();
  });
});
