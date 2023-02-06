import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSvgComponent } from './facebook-svg.component';

describe('FacebookSvgComponent', () => {
  let sut: FacebookSvgComponent;
  let fixture: ComponentFixture<FacebookSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookSvgComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates facebook svg', () => {
    expect(sut).toBeTruthy();
  });
});
