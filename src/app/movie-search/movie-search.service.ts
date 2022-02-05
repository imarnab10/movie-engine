import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieSearchResult } from '../model/movie-result.model';

@Injectable()
export class MovieSearchService {
  constructor(private http: HttpClient) {}

  movieSearch(query: string) {
    return this.http.get<MovieSearchResult>(
      'https://api.themoviedb.org/3/search/movie?api_key=95affd2e5dfbc96306e414c46d92bdaa&language=en-US&query=' +
        query +
        '&page=1&include_adult=false'
    );
  }
}
