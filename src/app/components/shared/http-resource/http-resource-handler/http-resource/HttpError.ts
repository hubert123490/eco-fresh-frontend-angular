import { BehaviorSubject } from 'rxjs';

export class HttpError {
  private _componentErrorDetected = new BehaviorSubject<boolean>(false);
  public readonly componentErrorDetected$ =
    this._componentErrorDetected.asObservable();
  public errorMessage: string = '';

  constructor(errorMessage: string) {
    this.errorMessage = errorMessage;
  }

  public showError() {
    this._componentErrorDetected.next(true);
  }

  public hideError() {
    this._componentErrorDetected.next(false);
  }

  public setErrorMessage(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
