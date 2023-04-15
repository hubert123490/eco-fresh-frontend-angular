import { HttpRequest } from '@angular/common/http';
import { HttpError } from './HttpError';
import { HttpLoader } from './HttpLoader';

export abstract class HttpResource {
  private validUrls: Array<string> = [];
  public loadingHandler: HttpLoader = new HttpLoader();
  public errorHandler: HttpError = new HttpError(
    'Error without assigned message'
  );

  constructor(validUrls: Array<string>) {
    this.validUrls = validUrls;
  }

  public isUrlValid(request: HttpRequest<unknown>): boolean {
    for (let url of this.validUrls) {
      if (this.validationHandler(request, url)) return true;
    }
    return false;
  }

  abstract validationHandler(
    request: HttpRequest<unknown>,
    url: string
  ): boolean;
}
