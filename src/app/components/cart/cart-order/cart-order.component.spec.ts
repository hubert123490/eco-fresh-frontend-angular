import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderComponent } from './cart-order.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CartOrderComponent', () => {
  let sut: CartOrderComponent;
  let fixture: ComponentFixture<CartOrderComponent>;
  const cartSummary = {
    totalPrice: 20.99,
    subTotal: 5,
    shipping: 5,
    tax: 10,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CartOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartOrderComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates CartOrder', () => {
    expect(sut).toBeTruthy();
  });
});
