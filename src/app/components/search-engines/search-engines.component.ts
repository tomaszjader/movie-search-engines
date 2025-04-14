import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-engines',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-engines.component.html',
  styleUrl: './search-engines.component.scss'
})
export class SearchEnginesComponent {
  search(){

  }
  searchText = '';
  searchResults: any[] = [];
}
