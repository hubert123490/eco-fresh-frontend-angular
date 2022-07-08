import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomerImageComponent } from './customer-image/customer-image.component';

import { CustomerStoryComponent } from './customer-story.component';

describe('CustomerStoryComponent', () => {
  let component: CustomerStoryComponent;
  let fixture: ComponentFixture<CustomerStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerStoryComponent, CustomerImageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create customer story component', () => {
    expect(component).toBeTruthy();
  });

  it('should set customerName and customerBio properties', () => {
    component.customerName = 'test name';
    component.customerBio = 'test bio';
    const h1 = fixture.nativeElement.querySelector('.story__customer');
    const h2 = fixture.nativeElement.querySelector('.story__subtitle');
    fixture.detectChanges();
    expect(h1.textContent).toEqual('test name');
    expect(h2.textContent).toEqual('test bio');
  });

  it('should set customerName and customerBio properties', () => {
    component.customerName = 'test name';
    component.customerBio = 'test bio';
    const h1 = fixture.nativeElement.querySelector('.story__customer');
    const h2 = fixture.nativeElement.querySelector('.story__subtitle');
    fixture.detectChanges();
    expect(h1.textContent).toEqual('test name');
    expect(h2.textContent).toEqual('test bio');
  });

  it('should render customer image component before content', () => {
    const component = fixture.componentInstance;
    component.isEven = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.even--image'))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('.odd--image'))).toBeNull();
  });

  it('should render customer image component after content', () => {
    const component = fixture.componentInstance;
    component.isEven = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.even--image'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.odd--image'))).not.toBeNull();
  });
});
