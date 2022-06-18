import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieSearchResult } from '../model/movie-result.model';

@Injectable()
export class TrendingSearchService {
  constructor(private http: HttpClient) {}

  movieSearch(page: number) {
    return this.http.get<MovieSearchResult>(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=95affd2e5dfbc96306e414c46d92bdaa&page=' +
        page
    );
  }
}
