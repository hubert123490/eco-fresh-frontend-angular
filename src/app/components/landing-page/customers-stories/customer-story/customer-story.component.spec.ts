import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomerImageComponent } from './customer-image/customer-image.component';

import { CustomerStoryComponent } from './customer-story.component';

describe('CustomerStoryComponent', () => {
  let sut: CustomerStoryComponent;
  let fixture: ComponentFixture<CustomerStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerStoryComponent, CustomerImageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerStoryComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates customer story component', () => {
    expect(sut).toBeTruthy();
  });

  it('sets customerName and customerBio properties', () => {
    // given
    sut.customerData = {
      customerName: 'test name',
      customerBio: 'test bio',
      description: 'test description',
      imageData: {
        src: 'test src',
        alt: 'test alt',
      },
    };

    // when
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('.story__customer');
    const h2 = fixture.nativeElement.querySelector('.story__subtitle');
    
    // then
    expect(h1.textContent).toEqual('test name');
    expect(h2.textContent).toEqual('test bio');
  });

  it('sets customerName and customerBio properties', () => {
     // given
     sut.customerData = {
      customerName: 'test name',
      customerBio: 'test bio',
      description: 'test description',
      imageData: {
        src: 'test src',
        alt: 'test alt',
      },
    };

    // when
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('.story__customer');
    const h2 = fixture.nativeElement.querySelector('.story__subtitle');
    
    // then
    expect(h1.textContent).toEqual('test name');
    expect(h2.textContent).toEqual('test bio');
  });

  it('renders customer image component before content', () => {
    // given
    sut.isOdd = true;

    // when
    fixture.detectChanges();

    // then
    expect(fixture.debugElement.query(By.css('.even--image'))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('.odd--image'))).toBeNull();
  });

  it('renders customer image component after content', () => {
    // given
    sut.isOdd = false;

    // when
    fixture.detectChanges();

    // then
    expect(fixture.debugElement.query(By.css('.even--image'))).toBeNull();
    expect(fixture.debugElement.query(By.css('.odd--image'))).not.toBeNull();
  });
});
