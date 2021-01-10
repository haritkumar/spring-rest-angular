import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './login/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
            const user = sessionStorage.getItem(this.authenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME);
            console.log('Interceptor invoked - ' + user + '/' + user);
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${window.btoa(user + ':' + user)}`
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}