import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainPageComponent } from './main-page.component';
import { TopSearchNavComponent } from './top-search-nav/top-search-nav.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent, TopSearchNavComponent ],
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create main page component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger onResize function on window resize', () => {
    const component = fixture.componentInstance;
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('should set isFilterOpen while onResize function is called for wider screens', () => {
    const component = fixture.componentInstance;
    component.width = 800;
    component.isFilterOpen = false;
    window.dispatchEvent(new Event('resize'));
    expect(component.isFilterOpen).toBe(true);
  });

  it('check filterToggleHandler() function (smaller screens)', () => {
    const component = fixture.componentInstance;
    component.isFilterOpen = false;
    component.width = 500;
    component.filterToggleHandler();
    expect(component.isFilterOpen).toBe(true);
    component.filterToggleHandler();
    expect(component.isFilterOpen).toBe(false);
  });

  it('check filterToggleHandler() function (wider screens)', () => {
    const component = fixture.componentInstance;
    component.isFilterOpen = true;
    component.width = 900;
    component.height = 900;
    expect(component.isFilterOpen).toBe(true);

    component.filterToggleHandler();
    expect(component.isFilterOpen).toBe(true);
    component.filterToggleHandler();
    expect(component.isFilterOpen).toBe(true);
  });

  it('should render left-search-nav when isFilterOpen is set to true', () => {
    const component = fixture.componentInstance;
    component.isFilterOpen = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('app-left-search-nav'))
    ).not.toBeNull();
  });

  it('test constructor', () => {
    window.innerWidth = 500;
    const newFixture = TestBed.createComponent(MainPageComponent);
    const newComponent = newFixture.componentInstance;
    expect(newComponent.isFilterOpen).toBe(false);
    window.innerWidth = 800;
    
  });
});
