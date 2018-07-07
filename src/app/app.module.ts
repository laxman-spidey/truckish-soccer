import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  
} from '@angular/material';

import { AppComponent } from './app.component';
import { StadiumsPageComponent } from './stadiums-page/stadiums-page.component';
import { StadiumCardComponent } from './stadiums-page/stadium-card/stadium-card.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes = [
  { 
    path: 'stadiums', 
    component: StadiumsPageComponent 
  },
  { 
    path: 'stadiums/:id', 
    component: DetailsPageComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StadiumsPageComponent,
    StadiumCardComponent,
    DetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot  (routes),
    //Material Components
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    
    //Google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEWi0Wk1E1ivWeuTgS0ItPqg77eRyg2AU'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
