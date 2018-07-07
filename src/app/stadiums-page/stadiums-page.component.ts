import { Component, OnInit } from '@angular/core';
import { STADIUMS } from '../stadiums.model';
import { Stadium } from '../models';

@Component({
  selector: 'app-stadiums-page',
  templateUrl: './stadiums-page.component.html',
  styleUrls: ['./stadiums-page.component.css']
})
export class StadiumsPageComponent implements OnInit {

  stadiums: Stadium[];
  constructor() { 
    this.stadiums = STADIUMS;
  }

  ngOnInit() {
  
  }

}
