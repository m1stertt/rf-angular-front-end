import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { CategoryDto } from 'src/app/categories/shared/category.dto';

@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.scss']
})
export class AdminCategoryCreateComponent implements OnInit {

  category:CategoryDto={id:0,name:"",products:[]};
  constructor(private categoriesService:CategoriesService,private messageService:MessageService,private config: DynamicDialogConfig) { }

  ngOnInit(): void {
    if(this.config.data.product){
      this.category.products.push(this.config.data.product);
    }
  }

  create(){
    this.categoriesService.create(this.category).subscribe((res)=>{
      //@todo
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Fejl', detail:'Der er desværre opstået en fejl.\nStatus text: '+error.statusText});
    });
  }
}
