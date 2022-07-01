import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStoryComponent } from './customer-story.component';

describe('CustomerStoryComponent', () => {
  let component: CustomerStoryComponent;
  let fixture: ComponentFixture<CustomerStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
