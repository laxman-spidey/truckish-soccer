import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FirebaseAuthService } from "./firebase-auth.service";

const routes = [ 
    {
        path     : 'login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
    ],
    providers: [FirebaseAuthService],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA    
    ]
})  
export class LoginModule
{
}
