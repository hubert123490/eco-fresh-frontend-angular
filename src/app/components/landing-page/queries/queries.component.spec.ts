import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { landingPageData } from 'src/app/configs/landing-page.config';
import { FacebookSvgComponent } from './facebook-svg/facebook-svg.component';

import { QueriesComponent } from './queries.component';
import { QueryButtonComponent } from './query-button/query-button.component';

describe('QueriesComponent', () => {
  let sut: QueriesComponent;
  let fixture: ComponentFixture<QueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QueriesComponent,
        QueryButtonComponent,
        FacebookSvgComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(QueriesComponent);
    sut = fixture.componentInstance;
    sut.queries = landingPageData.queries
    fixture.detectChanges();
  });

  it('creates queries component', () => {
    expect(sut).toBeTruthy();
  });

  it('renders query button', () => {
    // given
    const component = fixture.nativeElement as HTMLElement;

    // when + then
    expect(component.querySelector('app-query-button')).toBeTruthy();
  });
});
