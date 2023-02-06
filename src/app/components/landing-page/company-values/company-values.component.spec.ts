import { ComponentFixture, TestBed } from '@angular/core/testing';
import { landingPageData } from 'src/app/configs/landing-page.config';

import { CompanyValuesComponent } from './company-values.component';

describe('CompanyValuesComponent', () => {
  let sut: CompanyValuesComponent;
  let fixture: ComponentFixture<CompanyValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyValuesComponent);
    sut = fixture.componentInstance;
    sut.companyValues = landingPageData.companyValues
    fixture.detectChanges();
  });

  it('creates company values component', () => {
    expect(sut).toBeTruthy();
  });
});
