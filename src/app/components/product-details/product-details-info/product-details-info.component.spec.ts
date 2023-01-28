import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import Product from 'src/app/main-page/products/product/Product';

import { ProductDetailsInfoComponent } from './product-details-info.component';

describe('ProductDetailsInfoComponent', () => {
  let component: ProductDetailsInfoComponent;
  let fixture: ComponentFixture<ProductDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsInfoComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('firstKcalRange - should return first kcal', () => {
    const component = fixture.componentInstance;
    component.product = new Product();
    component.product.productKcal = [500, 1000];
    expect(component.getFirstKcalRange()).toBe("500");
  });

  it('firstKcalRange - should return 0 when product kcal is undefined', () => {
    const component = fixture.componentInstance;
    component.product = undefined
    expect(component.getFirstKcalRange()).toBe("0");
  });

  it('secondKcalRange - should return second kcal', () => {
    const component = fixture.componentInstance;
    component.product = new Product();
    component.product.productKcal = [500, 1000];
    expect(component.getSecondKcalRange()).toBe("1000");
  });

  it('secondKcalRange - should return 0 when product kcal is undefined', () => {
    const component = fixture.componentInstance;
    component.product = undefined;
    expect(component.getSecondKcalRange()).toBe("0");
  });
});
