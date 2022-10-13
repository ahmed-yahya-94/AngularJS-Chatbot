import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthInterceptor } from './provider/oauth.interceptor';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: ChatComponent, canActivate: [OAuthInterceptor] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
