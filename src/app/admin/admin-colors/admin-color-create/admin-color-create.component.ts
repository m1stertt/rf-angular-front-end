import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { ColorsService } from 'src/app/colors/shared/colors.service';

@Component({
  selector: 'app-admin-color-create',
  templateUrl: './admin-color-create.component.html',
  styleUrls: ['./admin-color-create.component.scss']
})
export class AdminColorCreateComponent implements OnInit {

  color:ColorDto={id:0,title:"",colorString:'#1976D2',products:[]};
  constructor(private colorsService:ColorsService,private messageService:MessageService,private config: DynamicDialogConfig) { }

  ngOnInit(): void {
    if(this.config.data.product){
      this.color.products.push(this.config.data.product);
    }
  }

  create(){
    this.colorsService.create(this.color).subscribe((res)=>{
      //@todo
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Fejl', detail:'Der er desværre opstået en fejl.\nStatus text: '+error.statusText});
    });
  }

}
