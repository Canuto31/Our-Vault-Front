import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { CategoryComponent } from './components/category/category.component';
import { GameStoreComponent } from './components/game-store/game-store.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { StateComponent } from './components/state/state.component';
import { StreamPageComponent } from './components/stream-page/stream-page.component';
import { TypeComponent } from './components/type/type.component';
import { VideogameComponent } from './components/videogame/videogame.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authors', component: AuthorComponent},
  { path: 'books', component: BookListComponent},
  { path: 'categories', component: CategoryComponent},
  { path: 'gameStores', component: GameStoreComponent},
  { path: 'movies', component: MovieComponent},
  { path: 'series', component: SerieComponent},
  { path: 'states', component: StateComponent},
  { path: 'streamPages', component: StreamPageComponent},
  { path: 'types', component: TypeComponent},
  { path: 'videogames', component: VideogameComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
