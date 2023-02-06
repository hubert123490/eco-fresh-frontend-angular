import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { landingPageData } from 'src/app/configs/landing-page.config';
import { CompanyValuesComponent } from './company-values/company-values.component';
import { CustomersStoriesComponent } from './customers-stories/customers-stories.component';

import { LandingPageComponent } from './landing-page.component';
import { QueriesComponent } from './queries/queries.component';
import { WelcomeComponent } from './welcome/welcome.component';

describe('LandingPageComponent', () => {
  let sut: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent,
        WelcomeComponent,
        CompanyValuesComponent,
        CustomersStoriesComponent,
        QueriesComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    sut = fixture.componentInstance;
    sut.landingPageData = landingPageData
    fixture.detectChanges();
  });

  it('creates landing page component', () => {
    expect(sut).toBeTruthy();
  });

  it('renders welcome, company values, customer stories and app queries in no particular order', () => {
    const component = fixture.nativeElement as HTMLElement;

    expect(component.querySelector('app-welcome')).toBeTruthy();
    expect(component.querySelector('app-company-values')).toBeTruthy();
    expect(component.querySelector('app-customers-stories')).toBeTruthy();
    expect(component.querySelector('app-queries')).toBeTruthy();
  });
});
