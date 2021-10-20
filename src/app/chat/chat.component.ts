import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDot } from '../model/chatMessageDot';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    displaymsgs:ChatMessageDot[] = [];
    message: any = {user:'', msg:''};
  constructor(public webSockerService: WebSocketService) { }
  

  ngOnInit(): void {
    this.webSockerService;
    this.receive();
  }

  receive(){
    this.webSockerService.listen().subscribe((data:any) => {
      console.log('Array',data);
       [...this.displaymsgs,data]
    //  this.displaymsgs.push(data) 
     console.log(this.displaymsgs);
     return;
      
      
    })
  }

  sendMessage(sendForm: NgForm){
    let sent = this.webSockerService.sendMessage(sendForm.value)
    sendForm.controls.message.reset();
    return  sent ;
    
  }


}
