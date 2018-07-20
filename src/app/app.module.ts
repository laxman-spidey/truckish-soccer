import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {LoginModule} from './login/login.module';
import {AuthService} from './login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule  } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
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
import { AddStadiumCardComponent } from './stadiums-page/add-stadium-card/add-stadium-card.component';
import { NewStadiumDialogComponent } from './new-stadium-dialog/new-stadium-dialog.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseConfig } from './firebase-config';

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
    AddStadiumCardComponent,
    NewStadiumDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot  (routes),
    HttpClientModule,
    LoginModule,
    
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
    
    FlexLayoutModule,
    //Google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEWi0Wk1E1ivWeuTgS0ItPqg77eRyg2AU'
    }),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,

    
    MatFormFieldModule,
  ],
  entryComponents: [NewStadiumDialogComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas : [
        CUSTOM_ELEMENTS_SCHEMA    
    ]
})
export class AppModule { }
