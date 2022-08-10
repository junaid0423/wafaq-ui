import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Interceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  /**
   * This method intercepts all the requests and appends the authentication header in them.
   *
   * @param request
   * @param next
   * @returns
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = error.error.message;
        } else {
          if (error.status == 401) {
            this.router.navigate(['/unauthorized']);
            errorMsg =
              'User is not authorized to access the requested resource';
          } else {
            errorMsg = error?.error?.errors
              ? error.error.errors.length
                ? error.error.errors[0].message
                : JSON.stringify(error.error.errors)
              : error.message;
            errorMsg = errorMsg;
          }
        }
        return throwError(errorMsg);
      })
    );
  }
}
