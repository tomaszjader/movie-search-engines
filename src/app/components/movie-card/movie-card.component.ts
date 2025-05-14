import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Movie } from '../../services/movie.model';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() card: Movie = {} as Movie;

  constructor() { }
}
