import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../model/movie-details.model';
import { MovieDetailsSearchService } from './movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetailsData: MovieDetails | undefined;
  constructor(
    private route: ActivatedRoute,
    private movieDetailsSearchService: MovieDetailsSearchService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params['movieDetailsId']);
      this.movieDetailsSearchService
        .getMovieDetails(params['movieDetailsId'])
        .subscribe((data) => {
          this.movieDetailsData = data;
        });
    });
  }
}
