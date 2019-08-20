import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from '../logger/logger.service';

/**
 * Interceptor of Request Error.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    /**
     * @ignore
     */
    constructor(private toasterService: ToastrService, public logger: LoggerService) { }

    /**
     * Intercept request log and show a toast if is an request error
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method } = request;
        return next.handle(request).pipe(catchError(err => {
            if (err instanceof HttpErrorResponse) {
                this.logger.error(`${err.name} (${err.status}) for (${method}) ${url}`);
                this.toasterService.error(err.message, err.name, { closeButton: true });
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}

/**
 * Provider of Error interceptor
 */
export const ErrorInterceptorProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
