import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject, Observable } from "rxjs";

interface UserDataModel {
  username?: string
}

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    userData = new BehaviorSubject<UserDataModel>({});

    constructor(private cookieService: CookieService) { }

    setUserData(data: UserDataModel): void{
        this.userData.next(data);
    }

    getUserData(): UserDataModel{
        return this.userData.value;
    }

    checkAuthData(){
        const userData = this.cookieService.get('chatbotUser');
        if(userData){
            this.userData.next(JSON.parse(userData));
        }

    }
}
