import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieSearchResult } from '../model/movie-result.model';
import { MovieModel } from '../model/movie-search.model';
import { MovieSearchService } from './movie-search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  p: number = 1;
  @Input() msgFromParent!: string;
  movieSearchResult!: MovieSearchResult;
  total_pages!: number;
  current_page: number = 1;
  total_items!: number;
  movieData!: MovieModel[];
  constructor(private movieSearchService: MovieSearchService) {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log('inside movie search');
    console.log(this.msgFromParent);
    console.log(this.current_page);
    this.movieSearchService
      .movieSearch(this.msgFromParent, this.current_page)
      .subscribe((data) => {
        console.log(data);
        this.movieSearchResult = data;
        this.current_page = data.page;
        this.total_pages = data.total_pages;
        this.total_items = data.total_results;
        this.movieData = data.results;
      });
  }
  handlePageChange(event: any): void {
    console.log(event);
    this.current_page = event;
    console.log(this.current_page);
    console.log('handlePagechnage called');
    this.ngOnChanges();
  }
}
