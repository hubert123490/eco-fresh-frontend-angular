import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerImageComponent } from './customer-image.component';

describe('CustomerImageComponent', () => {
  let sut: CustomerImageComponent;
  let fixture: ComponentFixture<CustomerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerImageComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates customer image component', () => {
    expect(sut).toBeTruthy();
  });

  it('sets src and alt properties to img', () => {
    // given
    sut.imageData = {
      src: "test",
      alt: "test"
    }

    // when
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img');

    // then
    expect(img.alt).toEqual('test');
    expect(img.src).toContain('test');
  });
});
