import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger onResize function on window resize', () => {
    const component = fixture.componentInstance;
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('should automatically close the menu after resizing to certain width (see header component for value)', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = true;
    expect(component.isMenuOpen).toBe(true);

    window.resizeTo(800, 800);
    window.dispatchEvent(new Event('resize'));
    expect(component.isMenuOpen).toBe(false);
  });

  it('should close the mobile menu on smaller screens after clicking any link (see header component for value)', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = false;
    component.width = 500;
    expect(component.isMenuOpen).toBe(false);

    component.menuToggleHandler();
    expect(component.isMenuOpen).toBe(true);
  });

  it('should not pop mobile menu on wider screens after clicking any link (see header component for value, should be impossible to do)', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = true;
    component.width = 900;
    expect(component.isMenuOpen).toBe(true);

    component.menuToggleHandler();
    expect(component.isMenuOpen).toBe(false);
    component.menuToggleHandler();
    expect(component.isMenuOpen).toBe(false);
  });

  it('should return true when menu is open and it is small width screen', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = true;
    component.width = 500;
    expect(component.isMenuOpenAndSmallScreen()).toBe(true);
  });

  it('should return false when menu is not open and it is small width screen', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = false;
    component.width = 500;
    expect(component.isMenuOpenAndSmallScreen()).toBe(false);
  });

  it('should return false no matter if menu is open or not for large width screen', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = true;
    component.width = 800;
    expect(component.isMenuOpenAndSmallScreen()).toBe(false);
    component.isMenuOpen = false;
    expect(component.isMenuOpenAndSmallScreen()).toBe(false);
  });

  it('should render burger menu (small screen)', () => {
    const component = fixture.nativeElement;
    component.isMenuOpen = false;
    component.width = 500;
    fixture.detectChanges();
    expect(
      component.querySelector('.header__content--toggle__burger')
    ).not.toBeNull();
    expect(
      component.querySelector('.header__content--toggle__close')
    ).toBeNull();
  });

  it('should render close icon when menu is open (small screen)', () => {
    const component = fixture.componentInstance;
    component.isMenuOpen = true;
    component.width = 500;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('.header__content--toggle__burger'))
    ).toBeNull();
    expect(
      fixture.debugElement.query(By.css('.header__content--toggle__close'))
    ).not.toBeNull();
  });
});
