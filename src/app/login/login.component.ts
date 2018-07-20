import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector   : 'app-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.css'],
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;
    loginFormErrors: any;
    
    email: string;
    password: string;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
    )
    {
        
        this.loginFormErrors = {
            email   : {},
            password: {}
        };
    }

    ngOnInit()
    {
        this.loginForm = this.formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged()
    {  
        // tslint:disable-next-line:forin
        for ( const field in this.loginFormErrors )
        {
            if ( !this.loginFormErrors.hasOwnProperty(field) )
            {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            const control = this.loginForm.get(field);
            if ( control && control.dirty && !control.valid )
            {
                console.log('error ' + control.errors);
                this.loginFormErrors[field] = control.errors;
            }
        }
    }
    
    onLoginClicked() {
        console.log('onLoginClicked');
        // this.router.navigateByUrl('/stadiums');      
        const result = this.authService.login(this.email, this.password);
        // console.log(result);
        
        // .subscribe((response) => {
        //     console.log(response);
        //     if (response !== undefined && response !== null)
        //     {                
        //         if (response.response_code === '200') {
        //             const token = response.token;
        //             this.router.navigateByUrl('/stadiums');      
        //         }
        //         else {
        //             alert('invalid credentials');
        //         }
        //     }
        // });
    }
}
