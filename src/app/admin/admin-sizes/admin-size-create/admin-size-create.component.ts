import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ErrorHandlingMessageService } from 'src/app/errorHandling/shared/error-handling-message.service';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { SizesService } from 'src/app/sizes/shared/sizes.service';

@Component({
  selector: 'app-admin-size-create',
  templateUrl: './admin-size-create.component.html',
  styleUrls: ['./admin-size-create.component.scss']
})
export class AdminSizeCreateComponent implements OnInit {

  size:SizeDto={id:0,title:"",products:[]};
  constructor(private sizesService:SizesService,private messageService:MessageService,private config: DynamicDialogConfig,private errorHandlingMessageService:ErrorHandlingMessageService) { }

  ngOnInit(): void {
    if(this.config.data.product){
      this.size.products.push(this.config.data.product);
    }
  }

  create(){
    this.sizesService.create(this.size).subscribe((res)=>this.errorHandlingMessageService.success("Størrelsen er nu lavet."),
    (error)=>this.errorHandlingMessageService.error(error.statusText));
  }
}
