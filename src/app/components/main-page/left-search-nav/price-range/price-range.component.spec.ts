import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PriceRangeComponent } from './price-range.component';

describe('PriceRangeComponent', () => {
  let sut: PriceRangeComponent;
  let fixture: ComponentFixture<PriceRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceRangeComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceRangeComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates price range component', () => {
    expect(sut).toBeTruthy();
  });

  it('sets currMinPrice', () => {
    // given
    const event = { target: { value: 50 } };
    const expectedResult : number = 50;
    let result : number;

    // when
    fixture.detectChanges();
    sut.minPriceHandler(event);
    fixture.detectChanges();
    result = sut.currMin;

    // then
    expect(result).toEqual(expectedResult);
  });

  it('sets currMinPrice to (currMaxPrice - priceGap) when currMinPrice is greater than currMaxPrice', () => {
    // given
    sut.currMax = 500;
    const event = { target: { value: 600 } };
    let result : number;
    const expectedResult = sut.currMax - sut.priceGap;

    // when
    fixture.detectChanges
    sut.minPriceHandler(event);
    fixture.detectChanges();
    result = sut.currMin;

    // then
    expect(result).toBe(expectedResult);
  });

  it('sets currMinPrice to minPrice when currMinPrice is lower than minPrice', () => {
    // given
    const event = { target: { value: -100 } };
    let result : number;
    const expectedResult : number = sut.minPrice;

    // when
    fixture.detectChanges();
    sut.minPriceHandler(event);
    fixture.detectChanges();
    result = sut.currMin

    // then
    expect(result).toBe(expectedResult);
  });

  it('sets currMaxPrice', () => {
    // given
    const event = { target: { value: 800 } };
    const expectedResult : number = event.target.value;
    let result : number;

    // when
    fixture.detectChanges();
    sut.maxPriceHandler(event);
    fixture.detectChanges();
    result = sut.currMax;

    // then
    expect(result).toEqual(expectedResult);
  });

  it('sets currMaxPrice to (currMaxPrice + priceGap) when currMaxPrice is lower than currMinPrice', () => {
    // given
    sut.currMin = 400;
    const event = { target: { value: 300 } };
    const expectedResult : number = sut.currMin + sut.priceGap;
    let result;

    // when
    fixture.detectChanges();
    sut.maxPriceHandler(event);
    fixture.detectChanges();
    result = sut.currMax;

    // then
    expect(result).toBe(expectedResult);
  });

  it('sets currMaxPrice to maxPrice when currMaxPrice is higher than maxPrice', () => {
    // given
    sut.maxPrice = 1000;
    const event = { target: { value: 1500 } };
    const expectedResult : number = sut.maxPrice;
    let result;

    // when
    fixture.detectChanges();
    sut.maxPriceHandler(event);
    fixture.detectChanges();
    result = sut.currMax;

    // then
    expect(result).toBe(expectedResult);
  });

  it('checks if sliderProgress is updated', () => {
    // given
    sut.currMin = 300;
    sut.currMax = 600;
    const styles = sut.sliderProgress();

    // when
    fixture.detectChanges();

    // then
    expect(styles).toEqual({
      left: (sut.currMin / sut.maxPrice) * 100 + '%',
      right: 100 - (sut.currMax / sut.maxPrice) * 100 + '%',
    });
  });
});
