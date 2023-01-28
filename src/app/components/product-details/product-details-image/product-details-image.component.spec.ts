import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsImageComponent } from './product-details-image.component';

describe('ProductDetailsImageComponent', () => {
  let component: ProductDetailsImageComponent;
  let fixture: ComponentFixture<ProductDetailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
