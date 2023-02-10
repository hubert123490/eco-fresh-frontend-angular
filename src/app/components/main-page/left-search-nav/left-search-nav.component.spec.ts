import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSearchNavComponent } from './left-search-nav.component';

describe('LeftSearchNavComponent', () => {
  let sut: LeftSearchNavComponent;
  let fixture: ComponentFixture<LeftSearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSearchNavComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSearchNavComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates left-search-nav', () => {
    expect(sut).toBeTruthy();
  });
});
