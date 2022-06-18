import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../model/movie-details.model';
import { MovieReviewService } from './movie-details.review.service';
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
  reviews: Map<string, string> = new Map<string, string>();
  constructor(
    private route: ActivatedRoute,
    private movieDetailsSearchService: MovieDetailsSearchService,
    private movieTrailerService: MovieTrailerService,
    private movieReviewService: MovieReviewService
  ) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.route.queryParams.subscribe((params) => {
      console.log(params['movieDetailsId']);
      this.movieDetailsSearchService
        .getMovieDetails(params['movieDetailsId'])
        .subscribe((data) => {
          this.movieDetailsData = data;
        });
    });
    this.route.queryParams.subscribe((params) => {
      //console.log(params['movieDetailsId']);
      this.movieTrailerService
        .getTrailer(params['movieDetailsId'])
        .subscribe((data) => {
          data.results.forEach((e: any) => {
            this.videoIds.push(e.key);
          });
        });
    });
    this.route.queryParams.subscribe((params) => {
      //console.log(params['movieDetailsId']);
      this.movieReviewService
        .getReview(params['movieDetailsId'])
        .subscribe((data) => {
          data.results.forEach((e: any) => {
            //this.reviews.push(e.content + '-' + e.author);
            this.reviews.set(e.author, e.content);
          });
        });
    });
  }
}
