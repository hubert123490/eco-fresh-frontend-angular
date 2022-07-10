import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacebookSvgComponent } from './facebook-svg/facebook-svg.component';

import { QueriesComponent } from './queries.component';
import { QueryButtonComponent } from './query-button/query-button.component';

describe('QueriesComponent', () => {
  let component: QueriesComponent;
  let fixture: ComponentFixture<QueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QueriesComponent,
        QueryButtonComponent,
        FacebookSvgComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(QueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create queries component', () => {
    expect(component).toBeTruthy();
  });

  it('should render query button', () => {
    const fixture = TestBed.createComponent(QueriesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-query-button')).toBeTruthy();
  });
});
