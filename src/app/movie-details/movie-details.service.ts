import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails } from '../model/movie-details.model';

@Injectable()
export class MovieDetailsSearchService {
  constructor(private http: HttpClient) {}

  getMovieDetails(query: string) {
    return this.http.get<MovieDetails>(
      'https://api.themoviedb.org/3/movie/' +
        query +
        '?api_key=95affd2e5dfbc96306e414c46d92bdaa&language=en-US'
    );
  }
}
