import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../services/movie.model';

@Component({
  selector: 'app-search-engines',
  templateUrl: './search-engines.component.html',
  styleUrls: ['./search-engines.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class SearchEnginesComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public searchSubject = new Subject<string>();
  searchText: string = '';
  searchResults: any[] = [];
  movies: Movie[] = [];
  
  displayedColumns: string[] = ['Image', 'Title', 'Year','Runtime','Genre','Director','Plot'];
  dataSource!: MatTableDataSource<Movie>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private movieService: MovieService) {}

  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  search() {
    const titles = this.searchText;
    this.movieService.getMoviesByTitles(titles).subscribe(movies => {
      this.dataSource = new MatTableDataSource(movies);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}