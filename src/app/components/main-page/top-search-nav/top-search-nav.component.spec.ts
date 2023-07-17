import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveFilter } from '../search-nav';

import { TopSearchNavComponent } from './top-search-nav.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('TopSearchNavComponent', () => {
  let sut: TopSearchNavComponent;
  let fixture: ComponentFixture<TopSearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSearchNavComponent],
      imports: [BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({})]
    }).compileComponents();

    fixture = TestBed.createComponent(TopSearchNavComponent);
    sut = fixture.componentInstance;
    sut.responsiveFilter = new ResponsiveFilter();
    fixture.detectChanges();
  });

  it('creates top search nav component', () => {
    expect(sut).toBeTruthy();
  });

  it('toggles menu when toggleMenu() function is called', () => {
    // given
    const expectedResult: Array<boolean> = [true, false];
    let result: Array<boolean> = [];

    // when
    for (let attempt in expectedResult) {
      fixture.detectChanges();
      sut.filter.toggleFilter();
      result.push(sut.filter.isFilterOpen);
    }

    // then
    expect(result).toEqual(expectedResult);
  });

  it('checks displayFilter() function', () => {
    [
      { expectedResult: true, width: 500 },
      { expectedResult: false, width: 800 },
    ].forEach(({ expectedResult, width }) => {
      // given
      sut.responsiveFilter!.windowWidth = width;
      let result;

      // when
      fixture.detectChanges();
      result = sut.responsiveFilter!.displayFilter();

      // then
      expect(result).toEqual(expectedResult);
    });
  });

  it('displays filter button on small screens', () => {
    // given
    sut.responsiveFilter!.windowWidth = 500;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('button.nav--form__filter--button'))
    ).not.toBeNull();
  });

  it('does not display filter button on wider screens', () => {
    // given
    sut.responsiveFilter!.windowWidth = 800;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('button.nav--form__filter--button'))
    ).toBeNull();
  });

  it('displays filter button with filter icon', () => {
    // given
    sut.responsiveFilter!.windowWidth = 500;
    sut.filter.isFilterOpen = false;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('.nav--form__filter mat-icon'))
    ).toBeDefined();
  });
});
