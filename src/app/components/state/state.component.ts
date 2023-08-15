import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state.model';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit{
  states: State[] = [];

  constructor(private stateService : StateService) {};

  ngOnInit(): void {
      this.getState();
  }

  getState(): void {
    this.stateService.getStates().subscribe(states => this.states = states);
  }
}
