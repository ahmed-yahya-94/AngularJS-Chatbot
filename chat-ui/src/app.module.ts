import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { ChatComponent } from './components/chat/chat.component';
import { OAuthInterceptor } from './provider/oauth.interceptor';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessagesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // exports: [RouterModule],
  providers: [OAuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
