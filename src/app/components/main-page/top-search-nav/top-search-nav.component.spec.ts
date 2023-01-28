import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopSearchNavComponent } from './top-search-nav.component';

describe('TopSearchNavComponent', () => {
  let component: TopSearchNavComponent;
  let fixture: ComponentFixture<TopSearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSearchNavComponent],
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TopSearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create top search nav component', () => {
    expect(component).toBeTruthy();
  });

  it('should render categories when menuIsOpen is set to true', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.nav--category'))).not.toBeNull();
  });

  it('should not render categories when menuIsOpen is set to true', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.nav--category'))).toBeNull();
  });

  it('should toggle menu when arrow button is clicked', () => {
    const component = fixture.componentInstance;
    component.toggleMenu();
    expect(component.isMenuOpen).toBe(true);
    component.toggleMenu();
    expect(component.isMenuOpen).toBe(false);
  });

  it('check displayFilter() function', () => {
    const component = fixture.componentInstance;
    component.width = 500;
    expect(component.displayFilter()).toBe(true);
    component.width = 800;
    expect(component.displayFilter()).toBe(false);

  });
  

  it('should display filter button on small screens', () => {
    const component = fixture.componentInstance;
    component.width = 500;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.nav--form__filter'))).not.toBeNull();
  });

  it('should not display filter button on wider screens', () => {
    const component = fixture.componentInstance;
    component.width = 800;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.nav--form__filter'))).toBeNull();
  });

  it('should display filter button with filter icon', () => {
    const component = fixture.componentInstance;
    component.width = 500;
    component.isFilterOpen = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.nav--form__filter mat-icon'))).toBeDefined();
  });
});
