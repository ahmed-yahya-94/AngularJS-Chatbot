import { ChatService } from '../../services/chat.service'//'../services/chat.service';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-ui';
  // // References the #chat in the app.component.html
  // // [D5] 4: add below
  // @ViewChild('chat', {static: true}) chatElement: ElementRef;
  @ViewChild('chat', {static: false} ) chatElement: ElementRef

  //STEP 9 Intialize the Service
  constructor (private chatService:ChatService){
    // STEP  10 Open message.component.html
  }

  //STEP 1: add the chatInputText variable
  chatInputText = "";


  // STEP 28 Ask for user input when starting
  user:any
   //STEP 2: Create the constructor
  ngOnInit():void {
    // STEP 29 get user name at start
    this.chatService.user = prompt("What's your name?")
    // DAY STEPS
    this.chatService.start()
  }
  //STEP 3: Function for on Change
  onChatInputChange($event: any): void{
    this.chatInputText = $event.target.value;
  }

  // [D5] 5: Auto scroll
  scrollToBottom(){
    console.log("this.chatElement", this.chatElement.nativeElement)
   this.chatElement?.nativeElement.scroll({
     top: this.chatElement?.nativeElement.scrollHeight,
     left: 0,
     behavior: "smooth",
   })
  }
  //STEP 4: Function for the onSend
  onSend(input: string):void{
    //STEP 17 add messages to the array

    //STEP 30
    const message ={
      // STEP 32 Change message to text
      text: input,
      sender: this.chatService.user
    }
    //STEP 31 change (input) to (message)
    this.chatService.addMessage(message);
    // DAY 5 STEPS
   this.chatService.askWatson(input)
    //STEP 18 clear input text
    this.chatInputText = ''

    //STEP 19 run your code and validate

    setTimeout(() =>{
      this.scrollToBottom()
    }, 500)
   // [D5] 5: Auto scroll


  }
  //======== AFTER BREAK =======
  // STEP 5: Create a service from the command line

  // > ng generate service chat

  // STEP 6: Open file
  // chat.service.ts

}
