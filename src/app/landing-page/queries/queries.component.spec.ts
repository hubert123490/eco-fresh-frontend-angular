import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesComponent } from './queries.component';
import { QueryButtonComponent } from './query-button/query-button.component';

describe('QueriesComponent', () => {
  let component: QueriesComponent;
  let fixture: ComponentFixture<QueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueriesComponent, QueryButtonComponent],
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
