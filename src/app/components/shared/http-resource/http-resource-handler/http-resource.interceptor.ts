import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { HttpResourceHandlerService } from './http-resource-handler.service';
import { HttpResource } from './http-resource/HttpResource';

@Injectable()
export class HttpResourceInterceptor implements HttpInterceptor {
  private httpResources: { [key: string]: HttpResource };

  constructor(httpResourceHandlerService: HttpResourceHandlerService) {
    this.httpResources = httpResourceHandlerService.httpResources;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const showedHttpResources: Array<HttpResource> = [];

    for (const httpResource of Object.values(this.httpResources)) {
      if (httpResource.isUrlValid(request)) {
        httpResource.errorHandler.hideError();
        httpResource.loadingHandler.showSpinner();
        showedHttpResources.push(httpResource);
      }
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        for (const httpResource of Object.values(this.httpResources)) {
          if (httpResource.isUrlValid(request)) {
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Client Side Error: ${error.error.message}`;
              console.error(errorMessage);
            } else {
              console.error(error);
              // server-side error
              errorMessage = `Server Side Error, Code ${error.status}\nMessage: ${error.message}`;
            }

            httpResource.errorHandler.setErrorMessage(errorMessage);
            httpResource.errorHandler.showError();
          }
        }
        return throwError(() => error);
      }),
      finalize(() => {
        this.hideSpinners(showedHttpResources);
      })
    );
  }

  private hideSpinners(showedHttpResources: Array<HttpResource>) {
    for (const httpResource of showedHttpResources) {
      httpResource.loadingHandler.hideSpinner();
    }
  }
}
