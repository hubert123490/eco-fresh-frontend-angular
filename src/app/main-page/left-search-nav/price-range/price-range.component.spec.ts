import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PriceRangeComponent } from './price-range.component';

describe('PriceRangeComponent', () => {
  let component: PriceRangeComponent;
  let fixture: ComponentFixture<PriceRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceRangeComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create price range component', () => {
    expect(component).toBeTruthy();
  });

  it('should set currMinPrice', () => {
    const component = fixture.componentInstance;
    const event = { target: { value: 50 } };
    component.minPriceHandler(event);
    expect(component.currMin).toBe(50);
  });

  it('should set currMinPrice to (currMaxPrice - priceGap) when currMinPrice is greater than currMaxPrice', () => {
    const component = fixture.componentInstance;
    component.currMax = 500;
    const event = { target: { value: 600 } };
    component.minPriceHandler(event);

    expect(component.currMin).toBe(component.currMax - component.priceGap);
  });

  it('should set currMaxPrice', () => {
    const component = fixture.componentInstance;
    const event = { target: { value: 800 } };
    component.maxPriceHandler(event);
    expect(component.currMax).toBe(800);
  });

  it('should set currMaxPrice to (currMaxPrice + priceGap) when currMaxPrice is lower than currMinPrice', () => {
    const component = fixture.componentInstance;
    component.currMin = 400;
    const event = { target: { value: 300 } };
    component.maxPriceHandler(event);

    expect(component.currMax).toBe(component.currMin + component.priceGap);
  });

  it('should check if sliderProgress is updated', () => {
    const component = fixture.componentInstance;
    component.currMin = 300;
    component.currMax = 600;
    const styles = component.sliderProgress();

    expect(styles).toEqual({
      left: (component.currMin / component.maxPrice) * 100 + '%',
      right: 100 - (component.currMax / component.maxPrice) * 100 + '%',
    });
  });
});
