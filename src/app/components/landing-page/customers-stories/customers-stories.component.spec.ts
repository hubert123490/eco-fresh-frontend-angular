import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerStoryComponent } from './customer-story/customer-story.component';

import { CustomersStoriesComponent } from './customers-stories.component';

describe('CustomersStoriesComponent', () => {
  let sut: CustomersStoriesComponent;
  let fixture: ComponentFixture<CustomersStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersStoriesComponent, CustomerStoryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersStoriesComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates customers stories component', () => {
    expect(sut).toBeTruthy();
  });
});
