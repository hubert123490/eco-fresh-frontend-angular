import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let sut: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductsComponent', () => {
    expect(sut).toBeTruthy();
  });
});
