import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSummaryComponent } from './product-details-summary.component';

describe('ProductDetailsSummaryComponent', () => {
  let sut: ProductDetailsSummaryComponent;
  let fixture: ComponentFixture<ProductDetailsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsSummaryComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSummaryComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductDetailsSummaryComponent', () => {
    expect(sut).toBeTruthy();
  });
});
