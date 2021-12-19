import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { CategoryDto } from 'src/app/categories/shared/category.dto';
import { MessageHandlingService } from 'src/app/errorHandling/shared/message-handling.service';

@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.scss']
})
export class AdminCategoryCreateComponent implements OnInit {

  category:CategoryDto={id:0,name:"",products:[]};
  constructor(private categoriesService:CategoriesService,private ref:DynamicDialogRef,private config: DynamicDialogConfig,private messageHandlingService:MessageHandlingService) { }

  ngOnInit(): void {
    if(this.config.data.product){
      this.category.products.push(this.config.data.product);
    }
  }

  create(){
    if(!this.category.name.length) return this.messageHandlingService.invalid("Kategorien skal have et navn.");
    this.categoriesService.create(this.category).subscribe((res)=>{
      this.messageHandlingService.success("Kategorien er nu lavet.");
      this.ref.close();
    },
    (error)=>this.messageHandlingService.error(error.statusText));
  }
}
