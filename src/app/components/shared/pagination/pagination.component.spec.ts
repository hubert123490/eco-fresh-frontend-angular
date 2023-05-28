import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let sut: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates pagination', () => {
    expect(sut).toBeTruthy();
  });

  it('range(start, end) returns array of numbers', () => {
    // given
    const expectedResult = [1, 2, 3, 4, 5, 6];
    sut.total = 36;
    let result;

    // when
    sut.ngOnInit();
    fixture.detectChanges();
    result = sut.pages;

    // then
    expect(result).toEqual(expectedResult);
  });
});
