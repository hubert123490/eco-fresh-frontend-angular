import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyValuesComponent } from './company-values/company-values.component';
import { CustomersStoriesComponent } from './customers-stories/customers-stories.component';

import { LandingPageComponent } from './landing-page.component';
import { QueriesComponent } from './queries/queries.component';
import { WelcomeComponent } from './welcome/welcome.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
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
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create landing page component', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome, company values, customer stories and app queries in no particular order', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-welcome')).toBeTruthy();
    expect(compiled.querySelector('app-company-values')).toBeTruthy();
    expect(compiled.querySelector('app-customers-stories')).toBeTruthy();
    expect(compiled.querySelector('app-queries')).toBeTruthy();
  });
});
