import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, switchMap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = 'abe1a2d8';

  constructor(private http: HttpClient) {}

  getMoviesByTitles(titles: string[]): Observable<Movie[]> {
    return forkJoin(
      titles.map(title =>
        this.http.get<any>(`${this.apiUrl}?s=${encodeURIComponent(title)}&apikey=${this.apiKey}`).pipe(
          switchMap(searchResult => {
            const firstResult = searchResult?.Search?.[0];
            if (!firstResult) return of(null);

            return this.http.get<Movie>(`${this.apiUrl}?i=${firstResult.imdbID}&apikey=${this.apiKey}`);
          }),
          catchError(() => of(null))
        )
      )
    ).pipe(
      map(results => results.filter(movie => !!movie))
    );
  }
}
