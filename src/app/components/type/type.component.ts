import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type.model';
import { TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  types: Type[] = [];

  constructor(private typeService: TypeService) {};

  ngOnInit(): void {
      this.getTypes();
  }

  getTypes(): void {
    this.typeService.getTypes().subscribe(types => this.types = types);
  }

}
