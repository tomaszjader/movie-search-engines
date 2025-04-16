import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  templateUrl: './search-engines.component.html',
  styleUrl: './search-engines.component.scss'
})
export class SearchEnginesComponent {
  constructor(private http: HttpClient) {}

  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

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
