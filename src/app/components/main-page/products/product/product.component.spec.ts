import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let sut: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductComponent', () => {
    expect(sut).toBeTruthy();
  });
});
