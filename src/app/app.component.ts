import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loggedIn : boolean;
  constructor(
      private router: Router,
      private authService: AuthService
    ) {
    
  }
  ngOnInit() {
    this.authService.loginUpdate.subscribe( data => {
        console.log("called is logged in");
        console.log(data);
        this.loggedIn = data;
      });  
  }
  
  onDashboardClicked() {
    this.router.navigateByUrl('/dashboard');  
  }
  onCampsClicked() {
    this.router.navigateByUrl('/camp');  
  }
  onLogoutClicked() {
    this.router.navigateByUrl('/'); 
    this.authService.logout();  
  }
}
