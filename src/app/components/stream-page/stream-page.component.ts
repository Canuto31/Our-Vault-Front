import { Component, OnInit } from '@angular/core';
import { StreamPage } from 'src/app/models/streamPage.model';
import { StreamPageService } from 'src/app/services/stream-page/stream-page.service';

@Component({
  selector: 'app-stream-page',
  templateUrl: './stream-page.component.html',
  styleUrls: ['./stream-page.component.css']
})
export class StreamPageComponent implements OnInit {
  streamPages: StreamPage[] = [];

  constructor(private streamPageService : StreamPageService) {};

  ngOnInit(): void {
      this.getStreamPages();
  }

  getStreamPages(): void {
    this.streamPageService.getStreamPages().subscribe(streamPages => this.streamPages = streamPages);
  }

}
