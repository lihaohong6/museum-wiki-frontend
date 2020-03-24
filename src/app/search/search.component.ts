import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  SEARCH_OPTIONS = ['All', 'Museum', 'Collection', 'Artifact'];

  searchText = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
}
