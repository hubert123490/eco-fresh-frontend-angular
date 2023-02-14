import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let sut: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store : MockStore;
  const initialState = { };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [ provideMockStore({ initialState })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    store = TestBed.inject(MockStore);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductsComponent', () => {
    expect(sut).toBeTruthy();
  });
});
