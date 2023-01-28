import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsOrderComponent } from './product-details-order.component';

describe('ProductDetailsOrderComponent', () => {
  let component: ProductDetailsOrderComponent;
  let fixture: ComponentFixture<ProductDetailsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should propagate adding to cart to parent service', () => {
    const component = fixture.componentInstance;
    spyOn(component.addToCartEvent, "emit");
    spyOn(window, "confirm").and.returnValue(true);
    component.addToCart();
    fixture.detectChanges();

    expect(component.addToCartEvent.emit).toHaveBeenCalled();
  });
});
