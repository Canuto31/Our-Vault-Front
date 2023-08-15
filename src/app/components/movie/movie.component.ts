import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService : MovieService) {};

  ngOnInit(): void {
      this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }
}
