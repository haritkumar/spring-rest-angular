import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService} from './login/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AccessGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const requiresLogin = route.data.requiresLogin || false;
        if (requiresLogin) {
            console.log('login gaurd check');
            if (!this.authenticationService.isUserLoggedIn()) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }
    }
}
