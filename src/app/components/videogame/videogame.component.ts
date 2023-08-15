import { Component, OnInit } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.model';
import { VideogameService } from 'src/app/services/videogame/videogame.service';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {
  videogames: Videogame[] = [];

  constructor(private videogameService : VideogameService) {};

  ngOnInit(): void {
      this.getVideogames();
  }

  getVideogames(): void {
    this.videogameService.getVideogames().subscribe(videogames => this.videogames = videogames);
  }

}
