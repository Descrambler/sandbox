import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from './auth.model';
import { StaticSerializer } from '@app/_helpers/json-serializer';
import { AuthSerializer } from './auth.serializer';

/**
 * Auth service of application. Used to get current user, login or logout.
 */
@Injectable()
export class AuthenticationService {

    /**
     * The current user connected subject
     */
    private currentUserSubject: BehaviorSubject<Auth>;
    /**
     * The current user connected
     */
    public currentUser: Observable<Auth>;

    /**
     * @ignore
     */
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    /**
     * @returns the currentUser connected
     */
    public get currentUserValue(): Auth {
        return this.currentUserSubject.value;
    }

    /**
     * Call a post request to Sign in user
     * @param username username of user
     * @param password password of user
     */
    login(username: string, password: string): Observable<Auth> {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, { username, password })
            .pipe(map(auth => {
                const res = StaticSerializer.fromJson(auth, new AuthSerializer());
                if (!res || !res.token) {
                    throw new Error('The request return an empty object or token value is missing!');
                }
                localStorage.setItem('currentUser', JSON.stringify(auth));
                this.currentUserSubject.next(auth);
                return res;
            }));
    }

    /**
     * Sign out an user
     */
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}

