import { Injectable } from '@angular/core';
/* importaciones básicas para peticiones http */
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
/* Impotación de mis modelos  */
import { AuthorModel } from '../author/author.model';
import { TwimpModel } from './twimp.model';

@Injectable({
  providedIn: 'root',
})
export class TwimpService {
  private urlTW: string = 'http://localhost:3000/twimps';
  private urlFav: string = 'http://localhost:3000/author-favorites';

  constructor(private http: HttpClient) {}

  getTwimps(): Observable<TwimpModel[]> {
    let twimps: TwimpModel[] = [];

    return this.http.get(this.urlTW).pipe(
      map((dbTwimpList: any) => {
        for (let i = 0; i < dbTwimpList.length; i++) {
          const dbTwimp = dbTwimpList[i];

          /*  Verifico si 'dbTwimp' es null o undefined */
          if (dbTwimp) {
            let twimp: TwimpModel = new TwimpModel(
              /* 'id' tenga un valor (puede ser una cadena vacía si es nulo) */
              dbTwimp.id || '',
              /* para 'id' en la URL */
              'localhost:4200/twimp/' + (dbTwimp.id || ''),
              /*'author' es un objeto (puede ser un objeto vacío si es nulo) */
              new AuthorModel(dbTwimp.author || {}),
              dbTwimp.content || '',
              dbTwimp.timestamp || ''
            );
            twimps.push(twimp);
          }
        }
        return twimps;
      }),
      catchError(this.handleError)
    );
  }
  getFavoriteByAuthor(idAuthor: string, idtwimp: string): Observable<boolean> {
    return this.http.get(this.urlFav + '/' + idAuthor).pipe(
      map((res) => true),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(errMsg);
    return throwError(() => errMsg);
  }
}
