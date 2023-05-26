import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ProductsComponent } from './products.component';
import { mockedProducts } from './products.mock';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';

describe('ProductsComponent', () => {
  let sut: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: MockStore;
  const initialState = {
    products: mockedProducts,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ProductsComponent, PaginationComponent, ProductComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    store = TestBed.inject(MockStore);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ProductsComponent', () => {
    expect(sut).toBeTruthy();
  });

  it('changing page works', () => {
    // given
    spyOn(sut, 'changePage');

    // when
    sut.changePage(1)

    // then
    expect(sut.changePage).toHaveBeenCalled();
    expect(sut.currentPage).toEqual(1)
  });
});
