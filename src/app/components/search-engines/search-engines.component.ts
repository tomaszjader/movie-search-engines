import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../services/movie.model';

@Component({
  selector: 'app-search-engines',
  standalone: true,
  imports: [
    MovieCardComponent, 
    HttpClientModule, 
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './search-engines.component.html',
  styleUrl: './search-engines.component.scss'
})
export class SearchEnginesComponent {
  displayedColumns: string[] = ['Image', 'Title', 'Year','Runtime','Genre','Director','Plot'];
  constructor(private http: HttpClient,private movieService: MovieService) {}

  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  searchText = '';
  searchResults: any[] = [];
  movies: Movie[] = [];


  search() {
    const titles = this.searchText;
    this.movieService.getMoviesByTitles(titles).subscribe(movies => {
      this.movies = movies;
    });
  }
}