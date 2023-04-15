import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { HttpResourceHandlerService } from './http-resource-handler.service';
import { HttpResourceInterceptor } from './http-resource.interceptor';
import { HttpResource } from './http-resource/HttpResource';

describe('HttpResourceInterceptor', () => {
  const serverErrorHandler: any = {
    handle: () => {
      return new Observable(() => {
        throw new HttpErrorResponse({});
      });
    },
  };

  const clientSideErrorHandler: any = {
    handle: () => {
      return new Observable(() => {
        throw new HttpErrorResponse({ error: new ErrorEvent('error') });
      });
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpResourceInterceptor,
        {
          provide: HttpResourceHandlerService,
          useClass: HttpResourceHandlerServiceMock,
        },
      ],
    });
  });

  it('handles server error', () => {
    const interceptor: HttpResourceInterceptor = TestBed.inject(
      HttpResourceInterceptor
    );
    interceptor
      .intercept(new HttpRequest('GET', 'http://test'), serverErrorHandler)
      .subscribe({
        error(error) {
          expect(error).toBeInstanceOf(HttpErrorResponse);
        },
      });
  });

  it('handles client error', () => {
    const interceptor: HttpResourceInterceptor = TestBed.inject(
      HttpResourceInterceptor
    );
    interceptor
      .intercept(new HttpRequest('GET', 'http://test'), clientSideErrorHandler)
      .subscribe({
        error(error) {
          expect(error).toBeInstanceOf(HttpErrorResponse);
        },
      });
  });
});

class HttpResourceHandlerServiceMock extends HttpResourceHandlerService {
  public override httpResources: { [key: string]: HttpResource } = {};
}

export class HttpResourceMock1 extends HttpResource {
  validationHandler(request: HttpRequest<unknown>, url: string): boolean {
    return url === request.url && !request.params.has('tradeId');
  }
}

export class HttpResourceMock2 extends HttpResource {
  validationHandler(request: HttpRequest<unknown>, url: string): boolean {
    return url === request.url;
  }
}

export class HttpResourceMock3 extends HttpResource {
  validationHandler(request: HttpRequest<unknown>, url: string): boolean {
    let regex = new RegExp(`${url}[a-z0-9]*`);
    return regex.test(request.url);
  }
}
