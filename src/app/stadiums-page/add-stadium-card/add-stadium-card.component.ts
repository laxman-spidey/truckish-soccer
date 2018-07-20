import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewStadiumDialogComponent } from '../../new-stadium-dialog/new-stadium-dialog.component';


@Component({
  selector: 'app-add-stadium-card',
  templateUrl: './add-stadium-card.component.html',
  styleUrls: ['./add-stadium-card.component.css']
})
export class AddStadiumCardComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  
  private showNewStadiumDialog() {
    const dialogRef = this.dialog.open(NewStadiumDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
