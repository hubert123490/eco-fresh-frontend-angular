import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let sut: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let store : MockStore;
  const initialState = { };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [ provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    store = TestBed.inject(MockStore);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductDetailsComponent', () => {
    expect(sut).toBeTruthy();
  });
});
