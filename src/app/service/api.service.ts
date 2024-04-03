import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterI } from '../interface/characters.interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlService: string = environment.api_url;
  constructor(
    private http: HttpClient,
  ) { }


  /**
   * Retrieves a list of characters based on the specified page number.
   *
   * @param {number} page - The page number for the character list.
   * @return {Observable<CharacterI[]>} An observable of the character list.
   */
  getAllCharacters(page: number): Observable<CharacterI[]> {
    let dir = this.urlService + "/character/?page=" + page
    return this.http.get<CharacterI[]>(dir).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
