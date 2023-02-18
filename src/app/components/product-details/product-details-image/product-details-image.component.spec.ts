import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsImageComponent } from './product-details-image.component';

describe('ProductDetailsImageComponent', () => {
  let sut: ProductDetailsImageComponent;
  let fixture: ComponentFixture<ProductDetailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsImageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsImageComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductDetailsImage component', () => {
    expect(sut).toBeTruthy();
  });
});
