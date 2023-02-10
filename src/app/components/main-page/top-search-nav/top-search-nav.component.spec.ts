import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopSearchNavComponent } from './top-search-nav.component';

describe('TopSearchNavComponent', () => {
  let sut: TopSearchNavComponent;
  let fixture: ComponentFixture<TopSearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSearchNavComponent],
      imports: [BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TopSearchNavComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates top search nav component', () => {
    expect(sut).toBeTruthy();
  });

  it('renders categories when menuIsOpen is set to true', () => {
    // given
    sut.isMenuOpen = true;

    // when
    fixture.detectChanges();

    // then
    expect(fixture.debugElement.query(By.css('.nav--category'))).not.toBeNull();
  });

  it('does not render categories when menuIsOpen is set to true', () => {
    // given
    sut.isMenuOpen = false;

    // when
    fixture.detectChanges();

    // then
    expect(fixture.debugElement.query(By.css('.nav--category'))).toBeNull();
  });

  it('toggles menu when toggleMenu() function is called', () => {
    // given
    const expectedResult: Array<boolean> = [true, false];
    let result: Array<boolean> = [];

    // when
    for (let attempt in expectedResult) {
      fixture.detectChanges();
      sut.toggleMenu();
      result.push(sut.isMenuOpen);
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
      sut.width = width;
      let result;

      // when
      fixture.detectChanges();
      result = sut.displayFilter();

      // then
      expect(result).toEqual(expectedResult);
    });
  });

  it('displays filter button on small screens', () => {
    // given
    sut.width = 500;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('button.nav--form__filter--button'))
    ).not.toBeNull();
  });

  it('does not display filter button on wider screens', () => {
    // given
    sut.width = 800;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('button.nav--form__filter--button'))
    ).toBeNull();
  });

  it('displays filter button with filter icon', () => {
    // given
    sut.width = 500;
    sut.isFilterOpen = false;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('.nav--form__filter mat-icon'))
    ).toBeDefined();
  });
});
