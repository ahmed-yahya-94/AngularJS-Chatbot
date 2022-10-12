#Change dir name for app to chat
#Change all files under app to chat
#fix imports

#create dir app under components
#create app.compoment.css 
#create app.compoment.html
#insert <router-outlet></router-outlet>
#create app.compoment.ts

#insert
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() { }

  ngOnInit(): void {
  }

}

#run ng generate interceptor oauth
#run npm i ngx-cookie-service@13.2.1
#update oauth.interceptor.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class OAuthInterceptor implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.cookieService.check('chatbotUser');
    if (currentUser) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

#Navigate to chat.component.ts
#change
this.chatService.user = prompt('what's your name) to 
this.chatService.user = JSON.parse(this.cookieService.get('chatbotUser')).firstName;


