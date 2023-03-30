import { TestBed } from '@angular/core/testing';
import { HttpError } from './HttpError';
import { HttpLoader } from './HttpLoader';

describe('HttpLoader class', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('shows spinner', () => {
    // given
    const sut = new HttpLoader();
    const resultSubject = sut.componentLoading$;
    const expectedResult = true;

    // when
    sut.showSpinner();

    // then
    resultSubject.subscribe((result) => {
      expect(result).toEqual(expectedResult);
    });
  });

  it('hides spinner', () => {
    // given
    const sut = new HttpLoader();
    const resultSubject = sut.componentLoading$;
    const expectedResult = false;

    // when
    sut.hideSpinner();

    // then
    resultSubject.subscribe((result) => {
      expect(result).toEqual(expectedResult);
    });
  });
});
