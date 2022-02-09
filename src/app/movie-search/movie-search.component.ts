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
  movieSearchResult: MovieSearchResult | undefined;
  movieData: MovieModel[] | undefined;
  constructor(private movieSearchService: MovieSearchService) {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log('inside movie search');
    console.log(this.msgFromParent);
    this.movieSearchService
      .movieSearch(this.msgFromParent)
      .subscribe((data) => {
        console.log(data);
        this.movieSearchResult = data;
        this.movieData = data.results;
      });
  }
}
