import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSearchNavComponent } from './left-search-nav.component';

describe('LeftSearchNavComponent', () => {
  let component: LeftSearchNavComponent;
  let fixture: ComponentFixture<LeftSearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSearchNavComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create left-search-nav', () => {
    expect(component).toBeTruthy();
  });
});
