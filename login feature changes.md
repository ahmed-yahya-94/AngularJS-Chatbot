# Step 1
# Change dir name for `app` to `chat`
# Change all files under `app` to `chat`
# Fix imports

# Step 2
# Create dir `app` under `.chat-ui/src/components`
# Create `app.compoment.css` leave it empty

# Create `app.compoment.html`
# Insert 
```
<router-outlet></router-outlet>
```

# Create app.compoment.ts
# insert
```
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
```
# Step 3
# In `./chat-ui`
# run `ng generate interceptor oauth`
# run `npm i ngx-cookie-service@13.2.1`
# update oauth.interceptor.ts

```
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
```

# Step 4
# Navigate to `chat-ui/components/chat.component.ts`
# change
`this.chatService.user = prompt('what's your name)` > `this.chatService.user = JSON.parse(this.cookieService.get('chatbotUser')).firstName;`

# step 5
# login.component.ts
```
  login(){
    this.loginService.setUserData(this.form.getRawValue());
    axios.post('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    }).then( res => {
      if(res.status === 200){
        this.cookieService.set('chatbotUser', JSON.stringify(res.data))
        this.form.reset()
        this.router.navigate([''])
      }
    }).catch(err => {
      console.log('Error:', err)
    })
  }
  ```

