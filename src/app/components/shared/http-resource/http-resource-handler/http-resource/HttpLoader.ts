import { BehaviorSubject } from 'rxjs';

export class HttpLoader {
  private _componentLoading = new BehaviorSubject<boolean>(false);
  public readonly componentLoading$ = this._componentLoading.asObservable();

  public showSpinner() {
    this._componentLoading.next(true);
  }

  public hideSpinner() {
    this._componentLoading.next(false);
  }
}
