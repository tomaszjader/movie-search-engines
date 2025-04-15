import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-engines',
  standalone: true,
  imports: [
    MovieCardComponent, 
    HttpClientModule, 
    FormsModule,
    CommonModule
  ],
  templateUrl: './search-engines.component.html',
  styleUrl: './search-engines.component.scss'
})
export class SearchEnginesComponent {
  constructor(private http: HttpClient) {}

  search() {
    if (this.searchText.trim() !== '') {
      this.http.get(`http://www.omdbapi.com/?apikey=abe1a2d8&s=${this.searchText}`)
        .subscribe((response: any) => {
          if (response.Search) {
            this.searchResults = response.Search;
            console.log(this.searchResults);
          } else {
            this.searchResults = [];}
        });
    }
  }

  searchText = '';
  searchResults: any[] = [];
}
