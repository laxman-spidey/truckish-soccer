import { Component, OnInit } from '@angular/core';
import { STADIUMS } from '../stadiums.model';
import { Stadium } from '../models';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  private sub: any;
  private stadium: Stadium;
  
  constructor(
                private route: ActivatedRoute
              ) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.stadium = STADIUMS[id];
      console.log(this.stadium);
    });
    
  }

}
