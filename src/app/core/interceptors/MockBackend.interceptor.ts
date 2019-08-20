import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { User } from 'src/app/users/shared/user.model';
import { HelperString } from 'src/app/_helpers/string.hepler';

/**
 * An interceptor to replace backend to test front
 */
@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

    /**
     * @ignore
     */
    constructor(public logger: LoggerService) {
        logger.warn(`Mock Backend is enable`);
    }

    /**
     * intercept request and return a fake result
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        const users: User[] = [
            {
                id: 1,
                firstName: 'Test',
                auth: { login: 'test' },
                lastName: 'User',
                created: new Date(),
                updated: new Date(),
                version: 1
            }
        ];



        const { url, method } = request; // can add header and body

        // const authHeader = headers.get('Authorization');
        // const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');

        // const pipe = new DatePipe('en-US');
        this.logger.info(`${HelperString.CompleteString(`(${method})`, 6, ' ')} ${url}`);

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(50))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('auth/login') && method === 'POST':
                    return login();
                case url.endsWith('/users') && request.method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // TODO CHANGE
        // route functions

        function login() {

            const user = users.find(x => x.auth.login === request.body.username && 'test' === request.body.password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            user.auth.token = `fake-jwt-token`;
            localStorage.setItem('currentUser', JSON.stringify(user.auth));
            return ok(user.auth);
        }

        function getUsers() {
            if (!JSON.parse(localStorage.getItem('currentUser'))) {
                return unauthorized('User currently not logged');
            }
            console.log(users);
            return ok(JSON.stringify(users));
        }


        // helper functions

        function ok(pBody?: any) {
            return of(new HttpResponse({ status: 200, body: pBody }));
        }

        function error(message: any) {
            return throwError({ status: 400, message });
        }

        function unauthorized(message: any) {
            return throwError({ status: 401, message });
        }



        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1], 10);
        }
    }
}

/**
 * Provider of MockBackend interceptor
 */
export const MockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MockBackendInterceptor,
    multi: true
};
