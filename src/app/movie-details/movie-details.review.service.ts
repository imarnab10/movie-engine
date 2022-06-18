import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails } from '../model/movie-details.model';

@Injectable()
export class MovieReviewService {
  constructor(private http: HttpClient) {}

  getReview(query: string) {
    return this.http.get<any>(
      //https://api.themoviedb.org/3/movie/155/reviews?api_key=95affd2e5dfbc96306e414c46d92bdaa&language=en-US&page=1
      'https://api.themoviedb.org/3/movie/' +
        query +
        '/reviews?api_key=95affd2e5dfbc96306e414c46d92bdaa&language=en-US'
    );
  }
}
