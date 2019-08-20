import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './shared/auth.service';

/**
 * Simple authGuard to authorize or not an user to access some routes
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    /**
     * @ignore
     */
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    /**
     * authorize access some routes if user logged
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (!currentUser) {
            this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
        }
        return Boolean(currentUser);
    }
}
