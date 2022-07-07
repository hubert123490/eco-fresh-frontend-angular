import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerImageComponent } from './customer-image.component';

describe('CustomerImageComponent', () => {
  let component: CustomerImageComponent;
  let fixture: ComponentFixture<CustomerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create customer image component', () => {
    expect(component).toBeTruthy();
  });

  it('should set src and alt properties to img', () => {
    component.src = 'test';
    component.alt = 'test alt';
    const img = fixture.nativeElement.querySelector('img');
    fixture.detectChanges();
    expect(img.alt).toEqual('test alt');
    expect(img.src).toContain('test');
  });
});
