import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlingService {

  constructor(private messageService:MessageService) { }

  error(msg:String){
    this.messageService.add({severity:'error', summary:'Fejl', detail:'Der er desværre opstået en fejl.\nStatus text: '+msg});
  }

  success(msg:string){
    this.messageService.add({severity:'info', summary:msg});
  }
}
