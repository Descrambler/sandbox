import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/shared/auth.service';

/**
 * A simple JWT interceptor to add JWT token on intercepted request.
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    /**
     * @ignore
     */
    constructor(private authenticationService: AuthenticationService) { }

    /**
     * Intercept request and add JWT token.
     * @param request the request
     * @param next the request result after treatment.
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}

/**
 * Provider of JWT interceptor
 */
export const JWTProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
};
