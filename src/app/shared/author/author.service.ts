import { Injectable } from '@angular/core';
/* importaciones básicas para peticiones http */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor() {}
}
