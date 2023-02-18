import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsOrderComponent } from './product-details-order.component';

describe('ProductDetailsOrderComponent', () => {
  let sut: ProductDetailsOrderComponent;
  let fixture: ComponentFixture<ProductDetailsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsOrderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsOrderComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductDetailsOrderComponent', () => {
    expect(sut).toBeTruthy();
  });
});
