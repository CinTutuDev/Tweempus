import { Injectable } from '@angular/core';
/* importaciones básicas para peticiones http */
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthorModel } from './author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private url: string = 'http://localhost:3000/authors';
  private urlFav: string = 'http://localhost:3000/author-favorites';

  constructor(private http: HttpClient) {}

  getAuthor(id: string): Observable<AuthorModel> {
    /* da error porque lo inicializo a null y luego le doy valor en el map  */
    /* let author: AuthorModel = null; */

    return this.http.get<AuthorModel>(this.url + '/' + id).pipe(
      map((dbAuthor) => {
        const author = new AuthorModel(dbAuthor.id);
        author.fullName = dbAuthor.fullName;
        author.image = dbAuthor.image;
        author.url = 'http://localhost:4200/author/' + dbAuthor.id;
        return author;
      }),
      catchError(this.handleError)
    );
  }

  setAuthor(
    idAuthor: string,
    fullName: string,
    image: string
  ): Observable<any> {
    let dbAuthor: any = { id: idAuthor, fullName: fullName, image: image };

    return this.http
      .post(this.url, dbAuthor)
      .pipe(catchError(this.handleError));
  }
  createFavorite(idAuthor: string): Observable<any> {
    let dbAuthorFav: any = { id: idAuthor, twimps: [] };

    return this.http
      .post(this.urlFav, dbAuthorFav)
      .pipe(catchError(this.handleError));
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
