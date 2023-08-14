import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { VideogameComponent } from './components/videogame/videogame.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MovieComponent,
    SerieComponent,
    VideogameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
