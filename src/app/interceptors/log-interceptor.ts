import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class LogInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = new Date();
   /*  const authReq = req.method + ' ' + req.url; */
    const authReq = req.clone({headers: req.headers.set('Authorization', 'DENY')});
    console.log('Respuest: ' + authReq + startTime);
    return next.handle(req);
  }
}
