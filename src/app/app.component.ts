import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchEnginesComponent } from './components/search-engines/search-engines.component';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SearchEnginesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-search-engines';
}
