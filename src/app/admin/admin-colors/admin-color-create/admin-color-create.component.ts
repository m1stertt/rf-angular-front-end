import { Component} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { ColorsService } from 'src/app/colors/shared/colors.service';
import { ErrorHandlingMessageService } from 'src/app/errorHandling/shared/error-handling-message.service';

@Component({
  selector: 'app-admin-color-create',
  templateUrl: './admin-color-create.component.html',
  styleUrls: ['./admin-color-create.component.scss']
})
export class AdminColorCreateComponent {

  color:ColorDto={id:0,title:"",colorString:'#1976D2',products:[]};
  constructor(private colorsService:ColorsService,private config: DynamicDialogConfig,private errorHandlingMessageService:ErrorHandlingMessageService,public ref: DynamicDialogRef) {
    console.log(this.config.data);
    if(this.config&&this.config.data&&this.config.data.product){
      this.color.products.push(this.config.data.product);
    }
  }

  create(){
    this.colorsService.create(this.color).subscribe((res)=>this.errorHandlingMessageService.success("Farven er nu lavet."),
    (error)=>this.errorHandlingMessageService.error(error.statusText));
    this.ref.close();
  }

}
