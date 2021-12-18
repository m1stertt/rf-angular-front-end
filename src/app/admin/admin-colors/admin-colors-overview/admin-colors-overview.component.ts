import { Component, OnInit } from '@angular/core';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { ColorsService } from 'src/app/colors/shared/colors.service';
import { MenuService } from 'src/app/menu/shared/menu.service';
import {ConfirmationService } from 'primeng/api';
import { AdminColorCreateComponent } from '../admin-color-create/admin-color-create.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ErrorHandlingMessageService } from 'src/app/errorHandling/shared/error-handling-message.service';

@Component({
  selector: 'app-admin-colors-overview',
  templateUrl: './admin-colors-overview.component.html',
  styleUrls: ['./admin-colors-overview.component.scss']
})
export class AdminColorsOverviewComponent implements OnInit {

  constructor(private menuService:MenuService,private colorsService:ColorsService,private confirmationService:ConfirmationService,private dialogService:DialogService,private errorHandlingMessageService:ErrorHandlingMessageService) { }

  cats:ColorDto[]=[];
  color2: string = '#1976D2';
  editing: ColorDto | undefined;
  cols = [
    //{ field: 'id', header: 'ID' },
    //{ field: 'colorString', header: ""},
    { field: 'title', header: 'Name' },
    { field: 'products', header:'Produkter'}
    //{ field: 'productPrice', header: 'Price' },
    //{ field: 'quantity', header: 'Quantity' }
  ];
  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
      {label:'Kategorier',routerLink:"/admin/categories"}
    ];
    this.colorsService.getAll().subscribe(e=>this.cats=e)
  }

  setColorPicker(color:ColorDto){
    this.color2=color.colorString;
    this.editing=color;
  }

  create(){
    const ref = this.dialogService.open(AdminColorCreateComponent, {
      header: 'Ny farve',
      width: '240px'
    });
  }

  setColorFromPicker(){
    if(!this.editing) return;
    let oldColor=this.editing.colorString;
    this.editing.colorString=this.color2;
    this.colorsService.updateColor(this.editing).subscribe((res)=>this.errorHandlingMessageService.success("Farve indikator er blevet ændret i systemet."),
    (error)=>{
      if(this.editing){
        this.editing.colorString=oldColor;
      }
      this.errorHandlingMessageService.error(error.statusText);
    });
  }

  setNewTitle(){
    //@todo
  }

  confirmDelete(color:ColorDto) {
    this.confirmationService.confirm({
      message: 'Er du sikker på du vil fjerne denne farve? Der er lige nu '+color.products.length+" produkter som har denne farve i systemet.",
      header: 'Er du sikker?',
      icon: 'pi pi-info-circle',
      accept: () =>{
        this.colorsService.delete(color.id).subscribe(
          color=>this.errorHandlingMessageService.success('Farven er nu slettet fra systemet.'),
          error=>this.errorHandlingMessageService.error(error.statusText));
      }
    });
  }

}
