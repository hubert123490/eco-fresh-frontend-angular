import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsInfoComponent } from './product-details-info.component';

describe('ProductDetailsInfoComponent', () => {
  let sut: ProductDetailsInfoComponent;
  let fixture: ComponentFixture<ProductDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsInfoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsInfoComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductDetailsInfoComponent', () => {
    expect(sut).toBeTruthy();
  });
});
