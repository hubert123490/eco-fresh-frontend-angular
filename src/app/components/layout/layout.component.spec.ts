import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { LayoutComponent } from './layout.component';

@Component({
  template: `<app-layout><div class="test">Hello World</div></app-layout>`,
})
class TestComponent {}

describe('LayoutComponent', () => {
  let sut: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let testFixture : ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponent, FooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    testFixture = TestBed.createComponent(TestComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates layout component', () => {
    expect(sut).toBeTruthy();
  });

  it('renders header, custom content and footer', () => {
    // given
    const component = fixture.nativeElement as HTMLElement;

    // when
    const element: Element = testFixture.debugElement.query(
      By.css('.test')
    ).nativeElement;

    // then
    expect(component.querySelector('app-header')).toBeTruthy();
    expect(component.querySelector('app-footer')).toBeTruthy();
    expect(element.textContent).toContain('Hello World');
  });
});
