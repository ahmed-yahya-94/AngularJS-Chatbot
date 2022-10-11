// STEP 25 Import Message
import { Message, BOT_NAME } from '../model/message';
import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() { }
  // STEP 7 create an array for our messages
  // STEP 24 change the type of Array<string> Message
  messages:Array<Message> = []
  private userName: string | null= "";

  set user(user: string | null){
    this.userName = user
  }
  get user(): string | null{
    return this.userName;
  }

  sessionId = "" // STEP 27 DAY 5: Add sessionId
  //STEP 8 create an addMessage
  //STEP 26 Change msg:string to Message
  addMessage(msg: Message){
    this.messages.push(msg)
  }
  // STEP 25 create a session
  start(){
    // STEP 26 install axios
    //in chat-ui folder Run (cd chat-ui)
    // import axios from 'axios'; ADD TO TOP OF THE FILE
    axios.get("http://localhost:3000/createSession")
         .then(response => {
          if(response.status > 300){
            throw response.data
          }
          this.sessionId = response.data.session_id
          this.greetingMessage();

        })
        .catch(err => {
          console.error(err);
          this.errorMessage(err.response.data.message)
          console.error("createSession ERROR:", err)
        })
         //app.component.ts
  }
  errorMessage(error: string){
    this.addMessage({
      sender: BOT_NAME,
      text: "Please check with your adminisitrator something went wrong: \n"+error
    })
  }

  greetingMessage(){
    const ndate = new Date();
    const hours = ndate.getHours();
    let message = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

    message += ` ${this.userName}`

    this.addMessage({text: message, sender: BOT_NAME})

  }

  askWatson(msg: string){
    axios.post("http://localhost:3000/ask", {session_id: this.sessionId, text: msg})
    .then((response) =>{
      console.log("Onsend Response,", response)

      if(Object.keys(response.data).length === 0){
        throw "session has not been created";
      }
      const content = response.data.result.output.generic
      if(content.length === 0){
        const message ={
          // STEP 32 Change message to text
          text: "Sorry I don't understand the question.\n Can you rephrase?",
          sender: BOT_NAME
        }

        this.addMessage(message)
        return;
      }

      const message ={
        // STEP 32 Change message to text
        text: content[0].text,
        sender: BOT_NAME
      }

      this.addMessage(message)
    })
    .catch(err => this.errorMessage(err))
  }
}
