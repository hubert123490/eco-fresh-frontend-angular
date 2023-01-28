import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerStoryComponent } from './customer-story/customer-story.component';

import { CustomersStoriesComponent } from './customers-stories.component';

describe('CustomersStoriesComponent', () => {
  let component: CustomersStoriesComponent;
  let fixture: ComponentFixture<CustomersStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersStoriesComponent, CustomerStoryComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create customers stories component', () => {
    expect(component).toBeTruthy();
  });
});
