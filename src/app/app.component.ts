import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'blog75website';
  ismenurequired = false;
  isadmin = false;
  constructor(private router:Router, private services:AuthService) {}

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if(currenturl == '/login'|| currenturl =='/register')
    {
      this.ismenurequired = false
    }else{
      this.ismenurequired = true;
    }
    if(this.services.GetUserRole() == 'Admin')
    {
      this.isadmin = true;
    }
    else
    {
      this.isadmin = false;
    }
  }


  
}
