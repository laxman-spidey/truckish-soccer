import { Injectable } from '@angular/core';
import {md5} from 'md5';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import {Response} from '../response.model';
import {FirebaseAuthService} from './firebase-auth.service';



@Injectable()
export class AuthService {

    loggedIn: boolean;
    loginUpdate: Subject<boolean> = new Subject<boolean>();
    
    constructor(
        private http: HttpClient,
        private auth: FirebaseAuthService 
        ) { 
        if (this.getLoggedInStatus != null) {
            this.loggedIn = false;  
        }
        else {
            this.loggedIn = true;
        }
        
    }

    tryRegister(username: string, password: string): Observable<any> {
        // var hashPassword = this.md5(password);
        const postParams = {
            username: username,
            password: password
        };
        // const url = environment.apiUrl + '/pvri/auth/token';
        const result = this.auth.signUpWithEmail("mittu.thefire@gmail.com", "spiderman")
                                .then((object) => {
                                   console.log("subscribed", object);
                                })
                                .catch(error => {
                                    console.log("some error occured");
                                    if(error.code == "auth/email-already-in-use") {
                                        this.login(username, password);
                                    }
                                })
                                ;
        // console.log(result);
        // const url = "";
        // const response = this.http.post(url, postParams).map((res: any) => {
        //     console.log(res);
        //     const data = res.data;
        //     if (res.response_code === 200) {
        //         this.loginSuccess(data);
        //         of(res);
        //     }
        //     this.loginSuccess(res.data);
        //     return res;
        // });
        // return null;
        return of({});
    }
    
    login(username: string, password: string) {
        const result = this.auth.loginWithEmail("mittu.thefire@gmail.com", "spiderman")
                                .then((object) => {
                                   console.log("login success", object);
                                })
                                .catch(error => {
                                    console.log("some error occured");
                                    if(error.code == "auth/email-already-in-use") {
                                        
                                    }
                                })
                                ;
    }
    
    public isLoggedIn(): Observable<boolean> {
        return of(this.getLoggedInStatus());
    }
    public getLoggedInStatus(): boolean {
        if (this.getToken() != null) {
            this.loggedIn = false;  
        }
        else {
            this.loggedIn = true;
        }
        return this.loggedIn;
    }
    
    changeLoginState(loginState: boolean) {
        this.loggedIn = loginState;
        this.loginUpdate.next(this.loggedIn);
    }
    loginSuccess(token: string) {
        console.log('isLoggedIn=true');
        window.sessionStorage.setItem('token', token);
        this.changeLoginState(true);
    }
    
    private loggedOut() {
        console.log('isLoggedIn=false');
        window.sessionStorage.removeItem('token');
        this.changeLoginState(false);
    }
    
    private getToken(): string {
        return window.sessionStorage.getItem('token');
    }
    
    logout() {
        this.loggedOut();
        const postParams = {
            session_id : this.getToken()
        };
        // const url = environment.apiUrl + '/pvri/login/logout';
        const url = "";
        const response = this.http.post(url, postParams).subscribe((res: any) => {
            console.log('loggedOut');
            return res;
        });
        return response;
    }
}
