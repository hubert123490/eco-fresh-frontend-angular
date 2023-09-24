import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResource } from './http-resource/HttpResource';

@Injectable({
  providedIn: 'root',
})
export class HttpResourceHandlerService {
  public httpResources: { [key: string]: HttpResource } = {
    productsResource: new ProductsResource(['/products']),
    productDetailsResource: new ProductDetailsResource(['/products']),
  };
}

class ProductsResource extends HttpResource {
  validationHandler(request: HttpRequest<unknown>, url: string): boolean {
    return request.url.includes(url);
  }
}

class ProductDetailsResource extends HttpResource {
  validationHandler(request: HttpRequest<unknown>, url: string): boolean {
    return request.url.includes(url);
  }
}
