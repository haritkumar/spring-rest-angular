import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService} from './login/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            console.log('is log in');
            if (this.authenticationService.isUserLoggedIn()) {
                this.router.navigate(['/home']);
                return false;
            } else {
                return true;
            }
    }
}
