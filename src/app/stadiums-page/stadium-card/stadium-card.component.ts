import { Component, OnInit, Input } from '@angular/core';
import { Stadium } from '../../models'

@Component({
  selector: 'app-stadium-card',
  templateUrl: './stadium-card.component.html',
  styleUrls: ['./stadium-card.component.css']
})
export class StadiumCardComponent implements OnInit {

  @Input() stadium: Stadium;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
