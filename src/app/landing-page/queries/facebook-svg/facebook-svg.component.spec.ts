import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSvgComponent } from './facebook-svg.component';

describe('FacebookSvgComponent', () => {
  let component: FacebookSvgComponent;
  let fixture: ComponentFixture<FacebookSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create facebook svg', () => {
    expect(component).toBeTruthy();
  });
});
