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
  private url: string = 'http://localhost:3000/twimps';
  private urlFav: string = 'http://localhost:3000/author-favorites';

  constructor(private http: HttpClient) {}

  getTwimps(): Observable<TwimpModel[]> {
    let twimps: TwimpModel[] = [];

    return this.http.get(this.url).pipe(
      map((dbTwimpList: any) => {
        for (let i in dbTwimpList) {
          let twimp: TwimpModel = new TwimpModel(
            dbTwimpList[i].id,
            'localhost:4200/twimp/' + dbTwimpList[i].id,
            new AuthorModel(dbTwimpList[i].author),
            dbTwimpList[i].content,
            dbTwimpList[i].timestamp
          );
          twimps.push(twimp);
        }
        return twimps;
      }),
      catchError(this.handleError)
    );
  }

  setTwimp(twimp: TwimpModel): Observable<any> {
    let dbTwimp: any = {
      id: twimp.id,
      author: twimp.author.id,
      by: twimp.author.fullName,
      content: twimp.content,
      timestamp: twimp.timestamp,
    };

    return this.http.post(this.url, dbTwimp).pipe(catchError(this.handleError));
  }

  getFavoriteByAuthor(idAuthor: string, idtwimp: string): Observable<boolean> {
    return this.http.get(this.urlFav + '/' + idAuthor).pipe(
      map((response: any) => {
        let favorites: string[] = response['twimps'];
        if (favorites.indexOf(idtwimp) == -1) {
          return false;
        } else {
          return true;
        }
      }),
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
