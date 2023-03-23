import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductsComponent } from './cart-products.component';

describe('CartProductsComponent', () => {
  let sut: CartProductsComponent;
  let fixture: ComponentFixture<CartProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartProductsComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates CartProducts', () => {
    expect(sut).toBeTruthy();
  });
});
