import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSearchNavComponent } from './left-search-nav.component';

describe('LeftSearchNavComponent', () => {
  let component: LeftSearchNavComponent;
  let fixture: ComponentFixture<LeftSearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSearchNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
