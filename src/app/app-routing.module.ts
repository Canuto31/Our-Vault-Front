import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  { path: 'authors', component: AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
