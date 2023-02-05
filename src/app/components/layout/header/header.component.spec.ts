import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { navData } from 'src/app/configs/navigation/nav.config';

describe('HeaderComponent', () => {
  let sut: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule, RouterModule.forRoot([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    sut = fixture.componentInstance;
    sut.navData = navData.headerData
    fixture.detectChanges();
  });

  it('creates header component', () => {
    expect(sut).toBeTruthy();
  });

  it('triggers onResize function on window resize', () => {
    // given
    const spyOnResize = spyOn(sut, 'onResize');

    // when
    window.dispatchEvent(new Event('resize'));

    // then
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('closes the menu after resizing to certain width (see header component for value)', () => {
    // given
    sut.isMenuOpen = true;

    // when
    window.resizeTo(800, 800);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    // then
    expect(sut.isMenuOpen).toBe(false);
  });

  it('closes the mobile menu on smaller screens after clicking any link (see header component for value)', () => {
    // given
    sut.isMenuOpen = false;
    sut.width = 500;
    
    // when
    fixture.detectChanges()
    sut.menuToggleHandler();

    // then
    expect(sut.isMenuOpen).toBe(true);
  });

  it('does not pop mobile menu on wider screens after clicking any link (see header component for value, should be impossible to do)', () => {
    // given
    sut.isMenuOpen = true;
    sut.width = 900;
    let result : any = {};
    let expectedResult = {
      attempt1 : false,
      attempt2 : false
    }
    
    // when
    fixture.detectChanges();
    sut.menuToggleHandler();
    result.attempt1 = sut.isMenuOpen;
    sut.menuToggleHandler();
    result.attempt2 = sut.isMenuOpen;

    // then
    expect(expectedResult).toEqual(result);
  });

  it('returns true when menu is open and it is small width screen', () => {
    // given
    sut.isMenuOpen = true;
    sut.width = 500;

    // when
    fixture.detectChanges();

    // then
    expect(sut.isMenuOpenAndSmallScreen()).toBe(true);
  });

  it('returns false when menu is not open and it is small width screen', () => {
    // given
    sut.isMenuOpen = false;
    sut.width = 500;

    // when
    fixture.detectChanges();

    // then
    expect(sut.isMenuOpenAndSmallScreen()).toBe(false);
  });

  it('returns false no matter if menu is open or not for large width screen', () => {
    // given
    let result : any = {};
    sut.isMenuOpen = true;
    sut.width = 800;
    const expectedResult = {
      attempt1: false,
      attempt2: false
    }

    // when 
    fixture.detectChanges();
    result.attempt1 = sut.isMenuOpenAndSmallScreen();
    sut.isMenuOpen = false;
    fixture.detectChanges();
    result.attempt2 = sut.isMenuOpenAndSmallScreen();

    // then
    expect(result).toEqual(expectedResult);
  });

  it('renders burger menu (small screen)', () => {
    // given
    let component;
    sut.isMenuOpen = false;
    sut.width = 500;

    // when
    fixture.detectChanges();
    component = fixture.nativeElement;

    // then
    expect(
      component.querySelector('.header__content--toggle__burger')
    ).not.toBeNull();
    expect(
      component.querySelector('.header__content--toggle__close')
    ).toBeNull();
  });

  it('renders close icon when menu is open (small screen)', () => {
    // given
    sut.isMenuOpen = true;
    sut.width = 500;

    // when
    fixture.detectChanges();

    // then
    expect(
      fixture.debugElement.query(By.css('.header__content--toggle__burger'))
    ).toBeNull();
    expect(
      fixture.debugElement.query(By.css('.header__content--toggle__close'))
    ).not.toBeNull();
  });
});
