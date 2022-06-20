import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchService } from './movie-search/movie-search.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsSearchService } from './movie-details/movie-details.service';
import { TrendingSearchService } from './home-page/home-page.service';
import { MovieTrailerService } from './movie-details/movie-details.trailer.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MovieReviewService } from './movie-details/movie-details.review.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieSearchComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    YouTubePlayerModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MovieSearchService,
    MovieDetailsSearchService,
    TrendingSearchService,
    MovieTrailerService,
    MovieReviewService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
