import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() card: any;

  constructor() { 
  this.card = {
    "Title": "Batman: Mask of the Phantasm",
    "Year": "1993",
    "imdbID": "tt0106364",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjYwN2ZmZWYtMTdlNC00ZDQxLWEyNmUtZDI5Yjk5MzQ2N2Y3XkEyXkFqcGc@._V1_SX300.jpg"
  }
}

}
