import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails } from '../model/movie-details.model';

@Injectable()
export class MovieTrailerService {
  constructor(private http: HttpClient) {}

  getTrailer(query: string) {
    return this.http.get<any>(
      //http://api.themoviedb.org/3/movie/155/videos?api_key=95affd2e5dfbc96306e414c46d92bdaa&language=en-US
      'https://api.themoviedb.org/3/movie/' +
        query +
        '/videos?api_key=95affd2e5dfbc96306e414c46d92bdaa&language=en-US'
    );
  }
}
