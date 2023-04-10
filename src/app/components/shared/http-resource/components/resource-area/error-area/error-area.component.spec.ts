import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAreaComponent } from './error-area.component';

describe('ErrorAreaComponent', () => {
  let component: ErrorAreaComponent;
  let fixture: ComponentFixture<ErrorAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ErrorAreaComponent', () => {
    expect(component).toBeTruthy();
  });
});
