import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersStoriesComponent } from './customers-stories.component';

describe('CustomersStoriesComponent', () => {
  let component: CustomersStoriesComponent;
  let fixture: ComponentFixture<CustomersStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
