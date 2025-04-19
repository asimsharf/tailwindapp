import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenUtil } from './token.util';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly EXCLUDED_URLS = ['/auth/login', '/auth/register'];

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isExcluded = this.EXCLUDED_URLS.some((url) => req.url.includes(url));

    if (isExcluded) {
      return next.handle(req);
    }

    const token = TokenUtil.getToken();
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
