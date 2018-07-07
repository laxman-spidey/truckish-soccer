import { Component, OnInit, Input } from '@angular/core';
import { Stadium } from '../../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stadium-card',
  templateUrl: './stadium-card.component.html',
  styleUrls: ['./stadium-card.component.css']
})
export class StadiumCardComponent implements OnInit {

  @Input() stadium: Stadium;
  constructor(
                private router: Router
              ) { 
    
  }

  showDetailsPage() {
    console.log('showDetailsPage');
    this.router.navigateByUrl('/stadiums/'+this.stadium.id);
  }
  ngOnInit() {
  }

}
