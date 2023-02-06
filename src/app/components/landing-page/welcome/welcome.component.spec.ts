import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let sut: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates welcome component', () => {
    expect(sut).toBeTruthy();
  });
});
