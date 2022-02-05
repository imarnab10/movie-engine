import { BelongsToCollection } from './belongs-to-collection.model';
import { Genre } from './genre.model';
import { ProductionCompanies } from './production-companies.model';
import { ProductionCountries } from './production-countries.model';
import { SpokenLanguages } from './spoken-languages.model';

export class MovieDetails {
  adult: string;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;

  constructor(
    adult: string,
    backdrop_path: string,
    belongs_to_collection: BelongsToCollection,
    budget: number,
    genres: Genre[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: SpokenLanguages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  ) {
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.belongs_to_collection = belongs_to_collection;
    this.budget = budget;
    this.genres = genres;
    this.homepage = homepage;
    this.id = id;
    this.imdb_id = imdb_id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.production_companies = production_companies;
    this.production_countries = production_countries;
    this.release_date = release_date;
    this.revenue = revenue;
    this.runtime = runtime;
    this.spoken_languages = spoken_languages;
    this.status = status;
    this.tagline = tagline;
    this.title = title;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
