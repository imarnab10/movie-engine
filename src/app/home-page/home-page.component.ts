import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  dynamicSlides = [
    {
      id: '1',
      src: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      alt: 'Side 1',
      title: 'The Drak Knight',
    },
    {
      id: '2',
      src: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      alt: 'Side 2',
      title: 'The Shwashank Redemption',
    },
    {
      id: '3',
      src: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      alt: 'Side 3',
      title: 'The Fight Club',
    },
    {
      id: '4',
      src: 'https://image.tmdb.org/t/p/original/6PlhouMCYktJmdFwS9XtqRZaTqc.jpg',
      alt: 'Side 4',
      title: '12 Angry Men',
    },
    {
      id: '5',
      src: 'https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
      alt: 'Side 5',
      title: 'The Social Network',
      movieId: 37799,
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 100,
    dots: false,
    navSpeed: 1000,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };
}
