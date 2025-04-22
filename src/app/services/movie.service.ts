import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = 'abe1a2d8';

  constructor(private http: HttpClient) {}

  getMoviesByTitles(query: string): Observable<Movie[]> {
    return this.http.get<any>(`${this.apiUrl}?s=${encodeURIComponent(query)}&apikey=${this.apiKey}`).pipe(
      switchMap(searchResult => {
        const searchResults = searchResult?.Search;
        if (!searchResults || searchResults.length === 0) {
          return of([]);
        }

        const requests = searchResults.map((item: any) =>
          this.http.get<Movie>(`${this.apiUrl}?i=${item.imdbID}&apikey=${this.apiKey}`).pipe(
            catchError(() => of(null))
          )
        );

        return forkJoin<(Movie | null)[]>(requests).pipe(
          map(movies => movies.filter((movie): movie is Movie => movie !== null))
        );
      }),
      catchError(() => of([]))
    );
  }
}
