import { MovieModel } from './movie-search.model';

export class MovieSearchResult {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;

  constructor(
    page: number,
    results: MovieModel[],
    total_pages: number,
    total_results: number
  ) {
    this.page = page;
    this.results = results;
    this.total_pages = total_pages;
    this.total_results = total_results;
  }
}
