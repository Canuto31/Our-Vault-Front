import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { CategoryComponent } from './components/category/category.component';
import { GameStoreComponent } from './components/game-store/game-store.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { StateComponent } from './components/state/state.component';
import { StreamPageComponent } from './components/stream-page/stream-page.component';
import { TypeComponent } from './components/type/type.component';
import { VideogameComponent } from './components/videogame/videogame.component';

const routes: Routes = [
  { path: 'authors', component: AuthorComponent},
  { path: 'books', component: BookComponent},
  { path: 'categories', component: CategoryComponent},
  { path: 'gameStores', component: GameStoreComponent},
  { path: 'movies', component: MovieComponent},
  { path: 'series', component: SerieComponent},
  { path: 'states', component: StateComponent},
  { path: 'streamPages', component: StreamPageComponent},
  { path: 'types', component: TypeComponent},
  { path: 'videogames', component: VideogameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
