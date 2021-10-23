import { Injectable } from '@angular/core';
import { Observable,Subscriber } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn:'root'
})

export class WebSocketService {
  socket:any;
  socketUrl:string = 'https://chat-appo.herokuapp.com/'

  constructor(){
    this.socket = io(this.socketUrl)
  }

  listen(){
    return new Observable((subscriber) => {
      this.socket.on('recieveMessage',
      (data:any) =>{
        subscriber.next(data)
      })
    })
  };

  sendMessage(data:any) {
    this.socket.emit('addMessage',data )
    console.log(data);
  }
}





// import { Injectable } from '@angular/core';
// import { ChatMessageDot } from '../model/chatMessageDot';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketService {

//   webSocket: WebSocket | undefined;
//   chatMessages: ChatMessageDot[] = [];

//   constructor() { }

//   // Handling Incloming Message
//   public openWebSocket(){
//     this.webSocket = new WebSocket('https://notifications-test.notchcx.io');

//     this.webSocket.onopen = (event) => {
//       console.log('Open: ' ,event);
//     };

//     this.webSocket.onmessage = (event) =>{
//       const chatMessageDot = JSON.parse(event.data);
//       this.chatMessages.push(chatMessageDot);
//     };

//     this.webSocket.onclose = (event) => {
//       console.log('Close: ',event);  
//     };

//   }

//   // Sending Messages
//   public sendMessage(chatMessageDot: ChatMessageDot){
//     this.webSocket?.send(JSON.stringify(chatMessageDot));
//   }

//   // Close WebSocket
//   public closeWebSocket() {
//     this.webSocket?.close()
//   }
// }
