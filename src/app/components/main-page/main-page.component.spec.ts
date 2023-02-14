import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainPageComponent } from './main-page.component';
import { TopSearchNavComponent } from './top-search-nav/top-search-nav.component';

describe('MainPageComponent', () => {
  let sut: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent, TopSearchNavComponent ],
      imports: [BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates main page component', () => {
    expect(sut).toBeTruthy();
  });

  it('triggers onResize function on window resize', () => {
    // given
    const spyOnResize = spyOn(sut.responsiveFilter, 'onResize');

    // when
    window.dispatchEvent(new Event('resize'));

    // then
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('sets isFilterOpen while onResize function is called for wider screens', () => {
    // given
    window.innerWidth = 800;
    sut.responsiveFilter.isFilterOpen = false;

    // when
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));

    // then
    expect(sut.responsiveFilter.isFilterOpen).toBe(true);
  });

  it('checks filterToggleHandler() function (smaller screens)', () => {
    // given
    sut.responsiveFilter.isFilterOpen = false;
    sut.responsiveFilter.windowWidth = 500;
    const expectedResult : Array<boolean> = [true, false]
    let result : Array<boolean> = [];

    // when
    for(let attempt in expectedResult) {
      fixture.detectChanges();
      sut.responsiveFilter.toggleFilter();
      result.push(sut.responsiveFilter.isFilterOpen);
    }

    // then
    expect(result).toEqual(expectedResult);
  });

  it('checks filterToggleHandler() function (wider screens)', () => {
    // given
    sut.responsiveFilter.isFilterOpen = true;
    sut.responsiveFilter.windowWidth = 900;
    const expectedResult : Array<boolean> = [true, true, true]
    let result : Array<boolean> = [];

    // when
    for(let attempt in expectedResult) {
      fixture.detectChanges();
      result.push(sut.responsiveFilter.isFilterOpen);
      sut.responsiveFilter.toggleFilter();
    }

    // then
    expect(result).toEqual(expectedResult);
  });

  it('renders left-search-nav when isFilterOpen is set to true', () => {
    // given
    sut.responsiveFilter.isFilterOpen = true;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('app-left-search-nav'))
    ).not.toBeNull();
  });

  it('tests constructor', () => {
    // given
    window.innerWidth = 500;

    // when
    fixture.detectChanges();
    const newFixture = TestBed.createComponent(MainPageComponent);
    const newComponent = newFixture.componentInstance;

    // then
    expect(newComponent.responsiveFilter.isFilterOpen).toBe(false);
  });
});
