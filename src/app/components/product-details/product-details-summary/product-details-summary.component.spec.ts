import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSummaryComponent } from './product-details-summary.component';

describe('ProductDetailsSummaryComponent', () => {
  let component: ProductDetailsSummaryComponent;
  let fixture: ComponentFixture<ProductDetailsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
