import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchEnginesComponent } from './components/search-engines/search-engines.component';
import { MovieCardComponent } from "./components/movie-card/movie-card.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SearchEnginesComponent, MovieCardComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-search-engines';
}
