import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { SizesService } from 'src/app/sizes/shared/sizes.service';

@Component({
  selector: 'app-admin-size-create',
  templateUrl: './admin-size-create.component.html',
  styleUrls: ['./admin-size-create.component.scss']
})
export class AdminSizeCreateComponent implements OnInit {

  size:SizeDto={id:0,title:"",products:[]};
  constructor(private sizesService:SizesService,private messageService:MessageService,private config: DynamicDialogConfig) { }

  ngOnInit(): void {
    if(this.config.data.product){
      this.size.products.push(this.config.data.product);
    }
  }

  create(){
    this.sizesService.create(this.size).subscribe((res)=>{
      //@todo
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Fejl', detail:'Der er desværre opstået en fejl.\nStatus text: '+error.statusText});
    });
  }
}
