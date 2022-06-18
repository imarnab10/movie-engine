import { Component, OnInit } from '@angular/core';
import { MovieSearchResult } from '../model/movie-result.model';
import { MovieModel } from '../model/movie-search.model';
import { MovieSearchService } from '../movie-search/movie-search.service';
import { TrendingSearchService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  query: string = '';
  movieSearchResult!: MovieSearchResult;
  total_pages!: number;
  current_page: number = 1;
  total_items!: number;
  movieData!: MovieModel[];
  constructor(private trendingSearch: TrendingSearchService) {
    console.log(this.query);
  }
  ngOnInit(): void {
    this.trendingSearch.movieSearch(1).subscribe((data) => {
      console.log(data);
      this.movieSearchResult = data;
      this.current_page = data.page;
      this.total_pages = data.total_pages;
      this.total_items = data.total_results;
      this.movieData = data.results;
    });
  }
  onSearchChange($event: any) {
    console.log(this.query);
  }
  handle2ndpageChange() {
    this.trendingSearch.movieSearch(this.current_page).subscribe((data) => {
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
    this.handle2ndpageChange();
  }
}
