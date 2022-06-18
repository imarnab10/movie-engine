import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../model/movie-details.model';
import { MovieDetailsSearchService } from './movie-details.service';
import { MovieTrailerService } from './movie-details.trailer.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetailsData: MovieDetails | undefined;
  videoIds: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieDetailsSearchService: MovieDetailsSearchService,
    private movieTrailerService: MovieTrailerService
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
    this.route.queryParams.subscribe((params) => {
      console.log(params['movieDetailsId']);
      this.movieTrailerService
        .getTrailer(params['movieDetailsId'])
        .subscribe((data) => {
          data.results.forEach((e: any) => {
            this.videoIds.push('https://www.youtube.com/watch?v=' + e.key);
          });
        });
    });
  }
}
