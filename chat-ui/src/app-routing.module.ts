import { AppComponent } from './components/app/app.component';//'./app/app.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AppComponent] },
  { path: '', component: LoginComponent,canActivate: [AppComponent
  ] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
