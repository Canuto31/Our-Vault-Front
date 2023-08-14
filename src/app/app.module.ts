import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { VideogameComponent } from './components/videogame/videogame.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthorComponent } from './components/author/author.component';
import { GameStoreComponent } from './components/game-store/game-store.component';
import { StateComponent } from './components/state/state.component';
import { StreamPageComponent } from './components/stream-page/stream-page.component';
import { TypeComponent } from './components/type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MovieComponent,
    SerieComponent,
    VideogameComponent,
    CategoryComponent,
    AuthorComponent,
    GameStoreComponent,
    StateComponent,
    StreamPageComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
