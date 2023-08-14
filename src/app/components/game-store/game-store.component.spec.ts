import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoreComponent } from './game-store.component';

describe('GameStoreComponent', () => {
  let component: GameStoreComponent;
  let fixture: ComponentFixture<GameStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameStoreComponent]
    });
    fixture = TestBed.createComponent(GameStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
