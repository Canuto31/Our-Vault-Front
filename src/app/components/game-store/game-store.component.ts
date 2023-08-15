import { Component, OnInit } from '@angular/core';
import { GameStore } from 'src/app/models/gameStore.model';
import { GameStoreService } from 'src/app/services/game-store/game-store.service';

@Component({
  selector: 'app-game-store',
  templateUrl: './game-store.component.html',
  styleUrls: ['./game-store.component.css']
})
export class GameStoreComponent implements OnInit {
  gameStores: GameStore[] =[];

  constructor(private gameStoreService: GameStoreService) {};

  ngOnInit(): void {
      this.getGameStores();
  }

  getGameStores(): void {
    this.gameStoreService.getGameStores().subscribe(gameStores => this.gameStores = gameStores);
  }
}
