import { TestBed } from '@angular/core/testing';
import { HttpError } from './HttpError';

describe('HttpError class', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('shows httpError', () => {
    // given
    const sut = new HttpError('Error message');
    const resultSubject = sut.componentErrorDetected$;
    const expectedResult = true;

    // when
    sut.showError();

    // then
    resultSubject.subscribe((result) => {
      expect(result).toEqual(expectedResult);
    });
  });

  it('hides httpError', () => {
    // given
    const sut = new HttpError('Error message');
    const resultSubject = sut.componentErrorDetected$;
    const expectedResult = false;

    // when
    sut.hideError();

    // then
    resultSubject.subscribe((result) => {
      expect(result).toEqual(expectedResult);
    });
  });

  it('sets httpError message', () => {
    // given
    const sut = new HttpError('Error message');
    const expectedResult = 'new message';

    // when
    sut.setErrorMessage('new message');
    const result = sut.errorMessage;

    // then
    expect(result).toEqual(expectedResult);
  });
});
