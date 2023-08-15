import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Serie[] = [];

  constructor(private serieService : SerieService) {};

  ngOnInit(): void {
      this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => this.series = series);
  }
}
