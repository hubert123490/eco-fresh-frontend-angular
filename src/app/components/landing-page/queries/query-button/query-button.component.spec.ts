import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryButtonComponent } from './query-button.component';

describe('QueryButtonComponent', () => {
  let sut: QueryButtonComponent;
  let fixture: ComponentFixture<QueryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueryButtonComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates query button component', () => {
    expect(sut).toBeTruthy();
  });

  it('should display custom text', () => {
    // given
    sut.text = 'test';
    let result;
    let expectedResult = "test";

    // when
    fixture.detectChanges();
    result = fixture.nativeElement.querySelector('.text').textContent;

    // then
    expect(result).toEqual(expectedResult);
  });
});
