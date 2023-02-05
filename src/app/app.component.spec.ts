import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LayoutComponent } from './components/layout/layout.component';

describe('AppComponent', () => {
  let sut: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, LayoutComponent, LandingPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the app', () => {
    expect(sut).toBeTruthy();
  });

  it('renders layout', () => {
    // given
    const appLayout = fixture.nativeElement as HTMLElement;
    
    // then
    expect(appLayout.querySelector('app-layout')).toBeTruthy();
  });
});
