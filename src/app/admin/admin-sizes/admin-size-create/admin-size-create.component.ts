import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageHandlingService } from 'src/app/errorHandling/shared/message-handling.service';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { SizesService } from 'src/app/sizes/shared/sizes.service';

@Component({
  selector: 'app-admin-size-create',
  templateUrl: './admin-size-create.component.html',
  styleUrls: ['./admin-size-create.component.scss']
})
export class AdminSizeCreateComponent implements OnInit {

  size:SizeDto={id:0,title:"",products:[]};
  constructor(private sizesService:SizesService,private config: DynamicDialogConfig,private messageHandlingService:MessageHandlingService,private ref:DynamicDialogRef) { }

  ngOnInit(): void {
    if(this.config&&this.config.data&&this.config.data.product){
      this.size.products.push(this.config.data.product);
    }
  }

  create(){
    if(!this.size.title.length) return this.messageHandlingService.error("Størrelsen skal have et navn.");
    this.sizesService.create(this.size).subscribe((res)=>{
      this.messageHandlingService.success("Størrelsen er nu lavet.")
      this.ref.close();
    },
    (error)=>this.messageHandlingService.error(error.statusText));
  }
}
